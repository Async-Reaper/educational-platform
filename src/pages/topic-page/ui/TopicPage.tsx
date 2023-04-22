import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddLink, UploadResource } from 'features';
import { Image, ModalWindow, Typography } from 'shared/ui';
import { Sidebar } from 'widgets/sidebar';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Icon } from 'shared/libs/icons';
import { getCookie } from 'shared/libs/cookie';
import { getTopicSelector } from 'entities/topic/model/selector';
import { getTopic } from 'entities/topic/model/api';
import cls from './styles.module.scss';
import { VideoList } from './video-list';
import { LectureList } from './lecture-list';
import { PresentationList } from './presentation-list';
import { TrainingsList } from './training-list';

import video from '../../../../public/images/format-learning/video.png';
import lecture from '../../../../public/images/format-learning/lecture.png';
import presentation from '../../../../public/images/format-learning/presentation.png';
import training from '../../../../public/images/format-learning/training.png';

const Component = memo(() => {
  const { id } = useParams();
  const dataTopic = getTopicSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [typeLearn, setTypeLearn] = useState<string>();

  const [isVisibleAddResource, setIsVisibleResource] = useState(false);
  const [isVisibleAddLink, setIsVisibleAddLink] = useState(false);

  const getAllTopicHandler = useCallback(() => {
    dispatch(getTopic(id));
  }, [dispatch, id]);

  useEffect(() => {
    getAllTopicHandler();
    if (localStorage.getItem('type_learn')) {
      setTypeLearn(JSON.parse(localStorage.getItem('type_learn') || ''));
    }
  }, [dispatch, getAllTopicHandler, id, typeLearn]);

  const setTypeLearnHandler = useCallback((params: string) => {
    setTypeLearn(params);
    localStorage.setItem('type_learn', JSON.stringify(params));
  }, []);

  const backToCourse = useCallback(() => {
    navigate(-1);
    setTypeLearnHandler('');
  }, [navigate, setTypeLearnHandler]);

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           {
                        typeLearn
                          ? (
                             <div className={cls.back__link} onClick={() => setTypeLearnHandler('')}>
                                <div className={cls.icon__wrapper}>
                                   <Icon name='play' color='violet-primary' width={16} height={18.5} />
                                </div>
                                <div>
                                   <Typography tag='span' variant='small' color='gray-primary'>
                                      Выбрать другой способ обучения
                                   </Typography>
                                </div>
                             </div>
                          )
                          : (
                             <div className={cls.back__link} onClick={backToCourse}>
                                <div className={cls.icon__wrapper}>
                                   <Icon name='play' color='violet-primary' width={16} height={18.5} />
                                </div>
                                <div>
                                   <Typography tag='span' variant='small' color='gray-primary'>
                                      Выбрать другую тему
                                   </Typography>
                                </div>
                             </div>
                          )
                    }
           <div className={cls.topic__name}>
              <Typography variant='h3' color='violet-primary'>
                 {dataTopic?.data?.name}
              </Typography>
           </div>
           {
                        !typeLearn
                        && (
                        <div className={cls.topic__description}>
                           <Typography tag='span' variant='small' color='gray-primary'>
                              {dataTopic?.data?.description}
                           </Typography>
                        </div>
                        )
                    }
           <div className={cls.themes__list}>
              {
                            !typeLearn
                            && (
                            <>
                               <div className={cls.select_theme}>
                                  <Typography variant='body' tag='strong' color='violet-primary' uppercase>
                                     Выберите способ обучения
                                  </Typography>
                               </div>
                               <div className={cls.variant_learning__list}>
                                  {
                                        getCookie('is_teacher') === 'true'
                                        && (
                                        <>
                                           <div className={cls.create_resource__wrapper} onClick={() => setIsVisibleResource(true)}>
                                              <div className={cls.create_resource__btn}>
                                                 <Typography variant='small' uppercase tag='strong'>
                                                    Добавить ресурс
                                                 </Typography>
                                              </div>
                                           </div>
                                           <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                              <UploadResource id={dataTopic?.data?.id} setIsVisible={setIsVisibleResource} />
                                           </ModalWindow>
                                        </>
                                        )
                                    }
                                  {
                                        dataTopic?.data?.resources?.videos?.length !== 0
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
                                        <div className={cls.variant_learning} onClick={() => setTypeLearnHandler('lecture')}>
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
                                        <div className={cls.variant_learning} onClick={() => setTypeLearnHandler('presentation')}>
                                           <div>
                                              <Typography tag='span' variant='small' color='black-bg'>Презентации</Typography>
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
                                        <div className={cls.variant_learning} onClick={() => setTypeLearnHandler('training')}>
                                           <div>
                                              <Typography tag='span' variant='small' color='black-bg'>Тренажеры</Typography>
                                           </div>
                                           <div className={cls.image__wrapper}>
                                              <Image src={training} name='' />
                                           </div>
                                        </div>
                                        )
                                    }
                               </div>
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
                                          <Typography variant='small' tag='span' color='gray-primary'>Добавить видео</Typography>
                                       </div>
                                       <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                          <UploadResource id={dataTopic?.data?.id} setIsVisible={setIsVisibleResource} transTypeResource='video' />
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
                                          <Typography variant='body' color='gray-primary'>Добавить лекцию</Typography>
                                       </div>
                                       <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                          <UploadResource id={dataTopic?.data?.id} setIsVisible={setIsVisibleResource} transTypeResource='lecture' />
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
                                          <Typography variant='body' color='gray-primary'>Добавить презентацию</Typography>
                                       </div>
                                       <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
                                          <UploadResource id={dataTopic?.data?.id} setIsVisible={setIsVisibleResource} transTypeResource='presentation ' />
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
     </div>
  );
});

export default Component;
