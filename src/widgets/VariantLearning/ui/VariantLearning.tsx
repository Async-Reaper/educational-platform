import React, { FC, useEffect, useState } from 'react';
import { PopupWindow, Typography } from 'shared/ui';
import { getCookie } from 'shared/libs/cookie';
import { Icon } from 'shared/libs/icons';
import { topicData } from 'entities/Topic';
import { uploadResourceIsSuccess, UploadResourceModal } from 'features/UploadResource';
import { deleteResourceIsSuccess } from 'features/DeleteResource';
import { useModal } from 'shared/hooks/useModal/useModal';
import { AddLinkModal } from 'features/AddLink';
import { useSelector } from 'react-redux';

import { ConditionsBoolean } from 'shared/libs/components/Conditions/ConditionsBoolean/ConditionsBoolean';
import { ConditionsValue } from 'shared/libs/components/Conditions/ConditionsValue/ConditionsValue';
import { VariantLearningList } from './VariantLearningList/VariantLearningList';
import { TrainingsList } from './TrainingList/TrainingList';
import { PresentationList } from './PresentationList/PresentationList';
import { LectureList } from './LectureList/LectureList';
import { VideoList } from './VideoList/VideoList';
import cls from './styles.module.scss';

interface Props {
   typeLearn: any;
   setTypeLearnHandler: (params: string) => void;
}

const Component: FC<Props> = ({ typeLearn, setTypeLearnHandler }) => {
   const { isOpen: isOpenUploadResource, open: openUploadResource, close: closeUploadResource } = useModal();
   const { isOpen: isOpenAddLink, open: openAddLink, close: closeAddLink } = useModal();

   const dataTopic = useSelector(topicData);

   const statusDeleteResource = useSelector(deleteResourceIsSuccess);
   const [isShowPopupUploadResource, setIsShowPopupUploadResource] = useState(false);

   const statusUploadResource = useSelector(uploadResourceIsSuccess);
   const [isShowPopupDeleteResource, setIsShowPopupDeleteResource] = useState(false);

   useEffect(() => {
      if (statusUploadResource) {
         setIsShowPopupUploadResource(true);
      }
   }, [statusUploadResource, isShowPopupUploadResource]);

   useEffect(() => {
      if (statusDeleteResource) {
         setIsShowPopupDeleteResource(true);
      }
   }, [statusDeleteResource, isShowPopupDeleteResource]);

   return (
      <div>
         <div className={cls.themes__list}>
            <ConditionsBoolean conditions={isShowPopupUploadResource}>
               <PopupWindow
                  popupText='Ресурс успешно загружен'
                  isVisible={isShowPopupUploadResource}
                  setIsVisible={setIsShowPopupUploadResource}
               />
            </ConditionsBoolean>
            <ConditionsBoolean conditions={isShowPopupDeleteResource}>
               <PopupWindow
                  popupText='Ресурс успешно удален'
                  isVisible={isShowPopupDeleteResource}
                  setIsVisible={setIsShowPopupDeleteResource}
               />
            </ConditionsBoolean>
            <ConditionsBoolean conditions={!typeLearn}>
               <div className={cls.select_theme}>
                  <Typography variant='h3' tag='strong' color='violet-primary' uppercase>
                     Выберите способ обучения
                  </Typography>
               </div>
               <VariantLearningList dataTopic={dataTopic} setTypeLearnHandler={setTypeLearnHandler} />
               <ConditionsBoolean conditions={isOpenUploadResource}>
                  <UploadResourceModal
                     id={dataTopic?.id}
                     isOpen={isOpenUploadResource}
                     onClose={closeUploadResource}
                  />
               </ConditionsBoolean>
            </ConditionsBoolean>
         </div>
         <ConditionsValue condition={typeLearn} conditionValue='video'>
            <div className={cls.themes__list_title}>
               <ConditionsValue condition={getCookie('is_teacher')} conditionValue='true'>
                  <div className={cls.add_resource__btn} onClick={openUploadResource}>
                     <Icon name='plus' color='violet-primary' />
                     <Typography variant='small' tag='span' color='gray-primary'>
                        Добавить видео
                     </Typography>
                  </div>
                  <ConditionsBoolean conditions={isOpenUploadResource}>
                     <UploadResourceModal
                        id={dataTopic?.id}
                        isOpen={isOpenUploadResource}
                        onClose={closeUploadResource}
                        transTypeResource='video'
                     />
                  </ConditionsBoolean>
               </ConditionsValue>
            </div>
            <VideoList videos={dataTopic?.resources?.videos} />
         </ConditionsValue>
         <ConditionsValue condition={typeLearn} conditionValue='lecture'>
            <div className={cls.themes__list_title}>
               <ConditionsValue condition={getCookie('is_teacher')} conditionValue='true'>
                  <div className={cls.add_resource__btn} onClick={openUploadResource}>
                     <Icon name='plus' color='violet-primary' />
                     <Typography variant='body' color='gray-primary'>
                        Добавить лекцию
                     </Typography>
                  </div>
                  <ConditionsBoolean conditions={isOpenUploadResource}>
                     <UploadResourceModal
                        id={dataTopic?.id}
                        isOpen={isOpenUploadResource}
                        onClose={closeUploadResource}
                        transTypeResource='lecture'
                     />
                  </ConditionsBoolean>
               </ConditionsValue>
            </div>
            <LectureList lectures={dataTopic?.resources?.lectures} />
         </ConditionsValue>
         <ConditionsValue condition={typeLearn} conditionValue='presentation'>
            <div className={cls.themes__list_title}>
               <ConditionsValue condition={getCookie('is_teacher')} conditionValue='true'>
                  <div className={cls.add_resource__btn} onClick={openUploadResource}>
                     <Icon name='plus' color='violet-primary' />
                     <Typography variant='body' color='gray-primary'>
                        Добавить презентацию
                     </Typography>
                  </div>
                  <ConditionsBoolean conditions={isOpenUploadResource}>
                     <UploadResourceModal
                        id={dataTopic?.id}
                        isOpen={isOpenUploadResource}
                        onClose={closeUploadResource}
                        transTypeResource='presentation '
                     />
                  </ConditionsBoolean>
               </ConditionsValue>
            </div>
            <PresentationList presentations={dataTopic?.resources?.presentations} />
         </ConditionsValue>
         <ConditionsValue condition={typeLearn} conditionValue='training'>
            <div className={cls.themes__list_title}>
               <ConditionsValue condition={getCookie('is_teacher')} conditionValue='true'>
                  <div className={cls.add_resource__btn} onClick={openAddLink}>
                     <Icon name='plus' />
                     <Typography variant='body'>Добавить тренажер</Typography>
                  </div>
                  <ConditionsBoolean conditions={isOpenAddLink}>
                     <AddLinkModal
                        id={dataTopic?.id}
                        isOpen={isOpenAddLink}
                        onClose={closeAddLink}
                     />
                  </ConditionsBoolean>
               </ConditionsValue>
            </div>
            <TrainingsList trainings={dataTopic?.training_apparatuses} />
         </ConditionsValue>
      </div>
   );
};

export const VariantLearning = React.memo(Component);
