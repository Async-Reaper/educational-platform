import React from 'react';
import cls from 'widgets/VariantLearning/ui/styles.module.scss';
import { getCookie } from 'shared/libs/cookie';
import { Image, Typography } from 'shared/ui';
import { TopicsType } from 'entities/Topic';
import { useModal } from 'shared/hooks/useModal/useModal';
import { UploadResourceModal } from 'features/UploadResource';
import video from '../../../../../public/images/common/video.webp';
import lecture from '../../../../../public/images/common/lecture.webp';
import presentation from '../../../../../public/images/common/presentation.webp';
import training from '../../../../../public/images/common/training.webp';

interface Props {
   // eslint-disable-next-line no-unused-vars
   setTypeLearnHandler: (params: string) => void;
   dataTopic: TopicsType | undefined;
}

const Component = ({ setTypeLearnHandler, dataTopic }: Props) => {
   const { isOpen, open, close } = useModal();

   return (
      <div className={cls.variant_learning__list}>
         {
            getCookie('is_teacher') === 'true'
                && (
                   <>
                      <div
                         className={cls.create_resource__wrapper}
                         onClick={open}
                      >
                         <div className={cls.create_resource__btn}>
                            <Typography variant='small' uppercase tag='strong'>
                               Добавить ресурс
                            </Typography>
                         </div>
                      </div>
                      {
                         isOpen
                      && (
                         <UploadResourceModal
                            id={dataTopic?.id}
                            isOpen={isOpen}
                            onClose={close}
                         />
                      )
                      }
                   </>
                )
         }
         {
            dataTopic?.resources?.videos?.length !== 0
                && (
                   <div className={cls.variant_learning} onClick={() => setTypeLearnHandler('video')}>
                      <div>
                         <Typography tag='span' variant='body' color='black-bg'>Видео</Typography>
                      </div>
                      <div className={cls.image__wrapper}>
                         <Image src={video} name='' />
                      </div>
                   </div>
                )
         }
         {
            dataTopic?.resources?.lectures?.length !== 0
                && (
                   <div
                      className={cls.variant_learning}
                      onClick={() => setTypeLearnHandler('lecture')}
                   >
                      <div>
                         <Typography tag='span' variant='body' color='black-bg'>Лекции</Typography>
                      </div>
                      <div className={cls.image__wrapper}>
                         <Image src={lecture} name='' />
                      </div>
                   </div>
                )
         }
         {
            dataTopic?.resources?.presentations?.length !== 0
                && (
                   <div
                      className={cls.variant_learning}
                      onClick={() => setTypeLearnHandler('presentation')}
                   >
                      <div>
                         <Typography tag='span' variant='body' color='black-bg'>
                            Презентации
                         </Typography>
                      </div>
                      <div className={cls.image__wrapper}>
                         <Image src={presentation} name='' />
                      </div>
                   </div>
                )
         }
         {
            dataTopic?.training_apparatuses?.length !== 0
                && (
                   <div
                      className={cls.variant_learning}
                      onClick={() => setTypeLearnHandler('training')}
                   >
                      <div>
                         <Typography tag='span' variant='body' color='black-bg'>
                            Тренажеры
                         </Typography>
                      </div>
                      <div className={cls.image__wrapper}>
                         <Image src={training} name='' />
                      </div>
                   </div>
                )
         }
      </div>
   );
};

export const VariantLearningList = React.memo(Component);
