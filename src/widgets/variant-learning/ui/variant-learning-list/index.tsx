import React, { FC, useState } from 'react';
import cls from 'widgets/variant-learning/ui/styles.module.scss';
import { getCookie } from 'shared/libs/cookie';
import { Image, ModalWindow, Typography } from 'shared/ui';
import { UploadResource } from 'features';
import { TopicSchema } from 'entities/topic/model/types';
import video from '../../../../../public/images/common/video.png';
import lecture from '../../../../../public/images/common/lecture.png';
import presentation from '../../../../../public/images/common/presentation.png';
import training from '../../../../../public/images/common/training.png';

interface Props {
  setTypeLearnHandler: (params: string) => void;
  dataTopic: TopicSchema;
}

const Component: FC<Props> = ({ setTypeLearnHandler, dataTopic }) => {
  const [isVisibleAddResource, setIsVisibleResource] = useState(false);

  return (
     <div className={cls.variant_learning__list}>
        {
                getCookie('is_teacher') === 'true'
                && (
                <>
                   <div
                     className={cls.create_resource__wrapper}
                     onClick={() => setIsVisibleResource(true)}
                   >
                      <div className={cls.create_resource__btn}>
                         <Typography variant='small' uppercase tag='strong'>
                            Добавить ресурс
                         </Typography>
                      </div>
                   </div>
                   <ModalWindow
                     isVisible={isVisibleAddResource}
                     setIsVisible={setIsVisibleResource}
                   >
                      <UploadResource
                        id={dataTopic.data?.id}
                        setIsVisible={setIsVisibleResource}
                      />
                   </ModalWindow>
                </>
                )
            }
        {
                dataTopic.data?.resources?.videos?.length !== 0
                && (
                <div className={cls.variant_learning} onClick={() => setTypeLearnHandler('video')}>
                   <div>
                      <Typography tag='span' variant='small' color='black-bg'>Видео</Typography>
                   </div>
                   <div className={cls.image__wrapper}>
                      <Image src={video} name='' />
                   </div>
                </div>
                )
            }
        {
                dataTopic?.data?.resources?.lectures?.length !== 0
                && (
                <div
                  className={cls.variant_learning}
                  onClick={() => setTypeLearnHandler('lecture')}
                >
                   <div>
                      <Typography tag='span' variant='small' color='black-bg'>Лекции</Typography>
                   </div>
                   <div className={cls.image__wrapper}>
                      <Image src={lecture} name='' />
                   </div>
                </div>
                )
            }
        {
                dataTopic?.data?.resources?.presentations?.length !== 0
                && (
                <div
                  className={cls.variant_learning}
                  onClick={() => setTypeLearnHandler('presentation')}
                >
                   <div>
                      <Typography tag='span' variant='small' color='black-bg'>
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
                dataTopic?.data?.training_apparatuses?.length !== 0
                && (
                <div
                  className={cls.variant_learning}
                  onClick={() => setTypeLearnHandler('training')}
                >
                   <div>
                      <Typography tag='span' variant='small' color='black-bg'>
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
