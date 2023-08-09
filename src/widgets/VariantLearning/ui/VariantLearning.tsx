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
           {
                isShowPopupUploadResource
                && (
                <PopupWindow
                  popupText='Ресурс успешно загружен'
                  isVisible={isShowPopupUploadResource}
                  setIsVisible={setIsShowPopupUploadResource}
                />
                )
            }
           {
                isShowPopupDeleteResource
                && (
                <PopupWindow
                  popupText='Ресурс успешно удален'
                  isVisible={isShowPopupDeleteResource}
                  setIsVisible={setIsShowPopupDeleteResource}
                />
                )
            }
           {
                    !typeLearn
                    && (
                    <>
                       <div className={cls.select_theme}>
                          <Typography variant='h3' tag='strong' color='violet-primary' uppercase>
                             Выберите способ обучения
                          </Typography>
                       </div>
                       <VariantLearningList dataTopic={dataTopic} setTypeLearnHandler={setTypeLearnHandler} />
                       {
                            isOpenUploadResource
                            && (
                            <UploadResourceModal
                              id={dataTopic?.id}
                              isOpen={isOpenUploadResource}
                              onClose={closeUploadResource}
                            />
                            )
                        }
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
                                   <div className={cls.add_resource__btn} onClick={openUploadResource}>
                                      <Icon name='plus' color='violet-primary' />
                                      <Typography variant='small' tag='span' color='gray-primary'>
                                         Добавить видео
                                      </Typography>
                                   </div>
                                   {
                                        isOpenUploadResource
                                        && (
                                        <UploadResourceModal
                                          id={dataTopic?.id}
                                          isOpen={isOpenUploadResource}
                                          onClose={closeUploadResource}
                                          transTypeResource='video'
                                        />
                                        )
                                    }
                                </>
                                )
                            }
                   </div>
                   <VideoList videos={dataTopic?.resources?.videos} />
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
                                   <div className={cls.add_resource__btn} onClick={openUploadResource}>
                                      <Icon name='plus' color='violet-primary' />
                                      <Typography variant='body' color='gray-primary'>
                                         Добавить лекцию
                                      </Typography>
                                   </div>
                                   {
                                        isOpenUploadResource
                                        && (
                                        <UploadResourceModal
                                          id={dataTopic?.id}
                                          isOpen={isOpenUploadResource}
                                          onClose={closeUploadResource}
                                          transTypeResource='lecture'
                                        />
                                        )
                                    }
                                </>
                                )
                            }
                   </div>
                   <LectureList lectures={dataTopic?.resources?.lectures} />
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
                                   <div className={cls.add_resource__btn} onClick={openUploadResource}>
                                      <Icon name='plus' color='violet-primary' />
                                      <Typography variant='body' color='gray-primary'>
                                         Добавить презентацию
                                      </Typography>
                                   </div>
                                   {
                                        isOpenUploadResource
                                        && (
                                        <UploadResourceModal
                                          id={dataTopic?.id}
                                          isOpen={isOpenUploadResource}
                                          onClose={closeUploadResource}
                                          transTypeResource='presentation '
                                        />
                                        )
                                    }
                                </>
                                )
                            }
                   </div>
                   <PresentationList presentations={dataTopic?.resources?.presentations} />
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
                                   <div className={cls.add_resource__btn} onClick={openAddLink}>
                                      <Icon name='plus' />
                                      <Typography variant='body'>Добавить тренажер</Typography>
                                   </div>
                                   {
                                        isOpenAddLink
                                        && (
                                        <AddLinkModal
                                          id={dataTopic?.id}
                                          isOpen={isOpenAddLink}
                                          onClose={closeAddLink}
                                        />
                                        )
                                    }
                                </>
                                )
                            }
                   </div>
                   <TrainingsList trainings={dataTopic?.training_apparatuses} />
                </>
                )
            }
     </div>
  );
};

export const VariantLearning = React.memo(Component);
