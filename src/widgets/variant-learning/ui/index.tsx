import React, { FC, useEffect, useState } from 'react';
import { ModalWindow, PopupWindow, Typography } from 'shared/ui';
import { getCookie } from 'shared/libs/cookie';
import { AddLink, UploadResource } from 'features';
import { Icon } from 'shared/libs/icons';
import { VideoList } from 'widgets/variant-learning/ui/video-list';
import { LectureList } from 'widgets/variant-learning/ui/lecture-list';
import { PresentationList } from 'widgets/variant-learning/ui/presentation-list';
import { TrainingsList } from 'widgets/variant-learning/ui/training-list';
import { getTopicSelector } from 'entities/topic';
import { VariantLearningList } from 'widgets/variant-learning/ui/variant-learning-list';
import { getStatusUploadResourceSelector } from 'features/upload-resource';
import { getStatusDeleteResource } from 'features/delete-resource/model/selectors';
import cls from './styles.module.scss';

interface Props {
  typeLearn: any;
  setTypeLearnHandler: (params: string) => void;
}

const Component: FC<Props> = ({ typeLearn, setTypeLearnHandler }) => {
  const [isVisibleAddResource, setIsVisibleResource] = useState(false);
  const [isVisibleAddLink, setIsVisibleAddLink] = useState(false);
  const dataTopic = getTopicSelector();

  const [isShowPopupUploadResource, setIsShowPopupUploadResource] = useState(true);
  const statusUploadResource = getStatusUploadResourceSelector();

  const [isShowPopupDeleteResource, setIsShowPopupDeleteResource] = useState(false);
  const statusDeleteResource = getStatusDeleteResource();

  useEffect(() => {
    if (statusUploadResource.isSuccess) {
      setIsShowPopupUploadResource(true);
    }
  }, [statusUploadResource.isSuccess, isShowPopupUploadResource]);

  useEffect(() => {
    if (statusDeleteResource.isSuccess) {
      setIsShowPopupDeleteResource(true);
    }
  }, [statusDeleteResource.isSuccess, isShowPopupDeleteResource]);

  return (
     <div>
        <div className={cls.themes__list}>
           <PopupWindow
             popupText='Ресурс успешно загружен'
             isVisible={isShowPopupUploadResource}
             setIsVisible={setIsShowPopupUploadResource}
           />
           <PopupWindow
             popupText='Ресурс успешно удален'
             isVisible={isShowPopupDeleteResource}
             setIsVisible={setIsShowPopupDeleteResource}
           />
           {
                    !typeLearn
                    && (
                    <>
                       <div className={cls.select_theme}>
                          <Typography variant='body' tag='strong' color='violet-primary' uppercase>
                             Выберите способ обучения
                          </Typography>
                       </div>
                       <VariantLearningList dataTopic={dataTopic} setTypeLearnHandler={setTypeLearnHandler} />
                       <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                          <UploadResource id={dataTopic?.data?.id} setIsVisible={setIsVisibleResource} />
                       </ModalWindow>
                    </>
                    )
                }
        </div>
        {
                typeLearn === 'video'
                && (
                <>
                   <div className={cls.themes__list_title}>
                      {
                                getCookie('is_teacher') === 'true'
                                && (
                                <>
                                   <div className={cls.add_resource__btn} onClick={() => setIsVisibleResource(true)}>
                                      <Icon name='plus' color='violet-primary' />
                                      <Typography variant='small' tag='span' color='gray-primary'>
                                         Добавить видео
                                      </Typography>
                                   </div>
                                   <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                      <UploadResource
                                        id={dataTopic?.data?.id}
                                        setIsVisible={setIsVisibleResource}
                                        transTypeResource='video'
                                      />
                                   </ModalWindow>
                                </>
                                )
                            }
                   </div>
                   <VideoList videos={dataTopic?.data?.resources?.videos} />
                </>
                )
            }
        {
                typeLearn === 'lecture'
                && (
                <>
                   <div className={cls.themes__list_title}>
                      {
                                getCookie('is_teacher') === 'true'
                                && (
                                <>
                                   <div className={cls.add_resource__btn} onClick={() => setIsVisibleResource(true)}>
                                      <Icon name='plus' color='violet-primary' />
                                      <Typography variant='body' color='gray-primary'>
                                         Добавить лекцию
                                      </Typography>
                                   </div>
                                   <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                      <UploadResource
                                        id={dataTopic?.data?.id}
                                        setIsVisible={setIsVisibleResource}
                                        transTypeResource='lecture'
                                      />
                                   </ModalWindow>
                                </>
                                )
                            }
                   </div>
                   <LectureList lectures={dataTopic?.data?.resources?.lectures} />
                </>
                )
            }
        {
                typeLearn === 'presentation'
                && (
                <>
                   <div className={cls.themes__list_title}>
                      {
                                getCookie('is_teacher') === 'true'
                                && (
                                <>
                                   <div className={cls.add_resource__btn} onClick={() => setIsVisibleResource(true)}>
                                      <Icon name='plus' color='violet-primary' />
                                      <Typography variant='body' color='gray-primary'>
                                         Добавить презентацию
                                      </Typography>
                                   </div>
                                   <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                      <UploadResource
                                        id={dataTopic?.data?.id}
                                        setIsVisible={setIsVisibleResource}
                                        transTypeResource='presentation '
                                      />
                                   </ModalWindow>
                                </>
                                )
                            }
                   </div>
                   <PresentationList presentations={dataTopic?.data?.resources?.presentations} />
                </>
                )
            }
        {
                typeLearn === 'training'
                && (
                <>
                   <div className={cls.themes__list__title}>
                      {
                                getCookie('is_teacher') === 'true'
                                && (
                                <>
                                   <div className={cls.add_resource__btn} onClick={() => setIsVisibleAddLink(true)}>
                                      <Icon name='plus' />
                                      <Typography variant='body'>Добавить тренажер</Typography>
                                   </div>
                                   <ModalWindow isVisible={isVisibleAddLink} setIsVisible={setIsVisibleAddLink}>
                                      <AddLink id={dataTopic?.data?.id} setVisible={setIsVisibleAddLink} />
                                   </ModalWindow>
                                </>
                                )
                            }
                   </div>
                   <TrainingsList trainings={dataTopic?.data?.training_apparatuses} />
                </>
                )
            }
     </div>
  );
};

export const VariantLearning = React.memo(Component);
