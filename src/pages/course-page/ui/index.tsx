import React, { useEffect, useState } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Button, ModalWindow, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { getCourse } from 'pages/course-page/model/api';
import { getCourseSelector } from 'pages/course-page/model/selector';
import { CreateTopic } from 'features';
import cls from './styles.module.scss';
import {CommentsList} from "widgets/comments-list";

const Component = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const dataCourse = getCourseSelector();

  const [isVisibleCreateTopic, setIsVisibleCreateTopic] = useState(false);
  const [isVisibleAddLink, setIsVisibleAddLink] = useState(false);

  useEffect(() => {
    dispatch(getCourse(id));
  }, []);

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className={cls.course__name}>
              <Typography variant='h2' color='violet-primary'>
                 {dataCourse?.data?.name}
              </Typography>
           </div>
           <div className={cls.lessons__wrapper}>
              {
                    dataCourse?.data?.topics.map((topic) => (
                       <div className={cls.lesson__wrapper}>
                          <div className={cls.lesson_title__wrapper}>
                             <Typography variant='h3' color='violet-primary'>
                                {topic.name}
                             </Typography>
                          </div>
                          <div>
                             {topic.resources.map((resource) => (
                                <div>
                                   {resource.resource_type === 'video'
                                            && (
                                            <>
                                               <div className={cls.variant_learning__wrapper}>
                                                  <div className={cls.video__lessons}>
                                                     {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                                                     <video
                                                       src={`http://localhost:8000/${resource.file}`}
                                                       controls
                                                     >
                                                        <source src={`http://localhost:8000/${resource.file}`} />
                                                     </video>
                                                  </div>
                                               </div>
                                               <CommentsList id={resource.id} />
                                            </>
                                            )}
                                   { resource.resource_type === 'lecture'
                                            && (
                                            <>
                                               <a
                                                 href={`http://localhost:8000/${resource.file}`}
                                                 target='_blank'
                                                 download
                                                 rel='noreferrer'
                                               >
                                                  {resource.resource_type }
                                               </a>
                                               <CommentsList id={resource.id} />
                                            </>
                                            )}
                                   { resource.resource_type === 'presentation'
                                            && (
                                            <>
                                               <a
                                                 href={`http://localhost:8000/${resource.file}`}
                                                 target='_blank'
                                                 download
                                                 rel='noreferrer'
                                               >
                                                  {resource.resource_type }
                                               </a>
                                               <CommentsList id={resource.id} />
                                            </>
                                            )}

                                </div>
                             ))}
                             {topic.training_apparatuses.map((training_apparatus) => training_apparatus && (
                             <a
                               href={training_apparatus.link}
                               target='_blank'
                               rel='noreferrer'
                             >
                                {training_apparatus.description}
                             </a>
                             ))}
                          </div>
                       </div>
                    ))
                }
           </div>
           {
                localStorage.getItem('token')
                && (
                <Button onClick={() => setIsVisibleCreateTopic(true)}>
                   Создать тему
                </Button>
                )
            }
        </div>
        <ModalWindow isVisible={isVisibleCreateTopic} setIsVisible={setIsVisibleCreateTopic}>
           <CreateTopic id={id} setVisible={setIsVisibleCreateTopic} />
        </ModalWindow>
     </div>
  );
};

export const CoursePage = React.memo(Component);
