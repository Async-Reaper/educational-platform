import React, {
  Suspense, useCallback, useEffect, useState,
} from 'react';
import { Sidebar } from 'widgets/sidebar';
import {
  AppLink, Loader, ModalWindow, Typography,
} from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { getCourse } from 'pages/course-page/model/api';
import { getCourseSelector } from 'pages/course-page/model/selector';
import { CreateTopic, DeleteTopic } from 'features';
import { getCookie } from 'shared/libs/cookie';
import cls from './styles.module.scss';

const Component = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const dataCourse = getCourseSelector();
  const [isVisibleCreateTopic, setIsVisibleCreateTopic] = useState(false);
  const [isVisibleDeleteTopic, setIsVisibleDeleteTopic] = useState(false);

  const [idTopic, setIdTopic] = useState<number>(1);

  const showDeleteTopic = useCallback((idTopicWindow: number) => {
    setIsVisibleDeleteTopic(true);
    setIdTopic(idTopicWindow);
  }, []);

  useEffect(() => {
    dispatch(getCourse(id));
  }, []);

  return (
     <Suspense fallback={<Loader />}>
        <div className='page_platform'>
           <Sidebar />
           <div className='page_platform__content'>
              <div className={cls.course__name}>
                 <Typography variant='h3' color='violet-primary'>
                    {dataCourse?.data?.name}
                 </Typography>
              </div>
              <div className={cls.course__description}>
                 <Typography tag='span' variant='small' color='gray-primary'>
                    {dataCourse?.data?.description}
                 </Typography>
              </div>
              <div className={cls.themes__list}>
                 <div className={cls.themes__list_title}>
                    <Typography tag='span' variant='body' color='violet-primary'>
                       Доступные темы
                    </Typography>
                 </div>
                 <div className={cls.topics__list}>
                    {
                                getCookie('is_teacher') === 'true'
                                && (
                                <>
                                   <div
                                     className={cls.add_topic__wrapper}
                                     onClick={() => setIsVisibleCreateTopic(true)}
                                   >
                                      <div className={cls.add_topic__btn}>
                                         <Typography variant='small' uppercase tag='strong'>
                                            Добавить новую тему
                                         </Typography>
                                      </div>
                                   </div>
                                   <ModalWindow
                                     isVisible={isVisibleCreateTopic}
                                     setIsVisible={setIsVisibleCreateTopic}
                                   >
                                      <CreateTopic id={dataCourse?.data?.id} setVisible={setIsVisibleCreateTopic} />
                                   </ModalWindow>
                                </>
                                )
                            }
                    {
                                dataCourse?.data?.topics.map((topic) => (
                                   <div className={cls.topic__wrapper}>
                                      <div>
                                         <Typography variant='body' color='black-bg'>{topic.name}</Typography>
                                      </div>
                                      <div className={cls.topic__buttons}>
                                         <AppLink variant='secondary' to={`/course/${id}/topic/${topic.id}`}>
                                            <Typography
                                              tag='span'
                                              variant='small'
                                              color='violet-primary'
                                            >
                                               Перейти
                                            </Typography>
                                         </AppLink>
                                         {
                                                getCookie('is_teacher') === 'true'
                                                && (
                                                <>
                                                   <div
                                                     className={cls.delete_topic__btn}
                                                     onClick={() => showDeleteTopic(topic.id)}
                                                   >
                                                      <Typography tag='span' variant='small'>
                                                         Удалить
                                                      </Typography>
                                                   </div>
                                                   <ModalWindow
                                                     isVisible={isVisibleDeleteTopic}
                                                     setIsVisible={setIsVisibleDeleteTopic}
                                                   >
                                                      <DeleteTopic
                                                        idTopic={idTopic}
                                                        idCourse={dataCourse?.data?.id}
                                                        setVisible={setIsVisibleDeleteTopic}
                                                      />
                                                   </ModalWindow>
                                                </>
                                                )
                                            }
                                      </div>
                                   </div>
                                ))
                            }
                 </div>
              </div>
           </div>
        </div>
     </Suspense>
  );
};

export default Component;
