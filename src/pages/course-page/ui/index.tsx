import React, { useEffect, useState } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Button, ModalWindow, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { getCourse } from 'pages/course-page/model/api';
import { getCourseSelector } from 'pages/course-page/model/selector';
import { AddLink, CreateTopic, UploadResource } from 'features';
import { CommentsList } from 'widgets/comments-list';
import { AddComment } from 'features/add-comment/ui';
import { API_URL } from 'shared/libs/constants/baseURL';
import cls from './styles.module.scss';

const Component = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const dataCourse = getCourseSelector();

  const [isVisibleCreateTopic, setIsVisibleCreateTopic] = useState(false);
  const [isVisibleAddLink, setIsVisibleAddLink] = useState(false);
  const [isVisibleAddComment, setIsVisibleAddComment] = useState(false);
  const [isVisibleAddResource, setIsVisibleResource] = useState(false);

  const [resourceId, setResourceId] = useState(1);
  const [resourceType, setResourceType] = useState('video');

  useEffect(() => {
    dispatch(getCourse(id));
  }, []);

  const videoContent = () => dataCourse?.data?.topics.map((topic) => (
    topic.resources.map((resource) => (
      topic.id === resourceId && resource.resource_type === 'video' && (
      <div className={cls.video__lessons}>
         {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
         <video
           src={`${API_URL}${resource.file}`}
           controls
         >
            <source src={`${API_URL}${resource.file}`} />
         </video>
         <div className={cls.add_comment__btn} onClick={() => setIsVisibleAddComment(true)}>
            <Typography variant='body'>Оставить комментарий</Typography>
         </div>
         <ModalWindow isVisible={isVisibleAddComment} setIsVisible={setIsVisibleAddComment}>
            <AddComment id={resource.id} setVisible={setIsVisibleAddComment} />
         </ModalWindow>
         <CommentsList id={resource.id} />
      </div>
      )))
  ));

  const lectureContent = () => dataCourse?.data?.topics.map((topic) => (
    topic.resources.map((resource) => (
      topic.id === resourceId && resource.resource_type === 'lecture' && (
      <div>
         <a
           className={cls.link}
           href={`${API_URL}${resource.file}`}
           target='_blank'
           download
           rel='noreferrer'
         >
            {resource.resource_type }
         </a>
         <div className={cls.add_comment__btn} onClick={() => setIsVisibleAddComment(true)}>
            <Typography variant='body'>Оставить комментарий</Typography>
         </div>
         <ModalWindow isVisible={isVisibleAddComment} setIsVisible={setIsVisibleAddComment}>
            <AddComment id={resource.id} setVisible={setIsVisibleAddComment} />
         </ModalWindow>
         <CommentsList id={resource.id} />
      </div>
      )))
  ));

  const presentationContent = () => dataCourse?.data?.topics.map((topic) => (
    topic.resources.map((resource) => (
      topic.id === resourceId && resource.resource_type === resourceType && (
      <div>
         <a
           className={cls.link}
           href={`${API_URL}${resource.file}`}
           target='_blank'
           download
           rel='noreferrer'
         >
            {resource.resource_type }
         </a>
         <div className={cls.add_comment__btn} onClick={() => setIsVisibleAddComment(true)}>
            <Typography variant='body'>Оставить комментарий</Typography>
         </div>
         <ModalWindow isVisible={isVisibleAddComment} setIsVisible={setIsVisibleAddComment}>
            <AddComment id={resource.id} setVisible={setIsVisibleAddComment} />
         </ModalWindow>
         <CommentsList id={resource.id} />
      </div>
      )))
  ));

  const addTraining = () => (
     <>
        <div className={cls.add_comment__btn} onClick={() => setIsVisibleAddLink(true)}>
           <Typography variant='body'>Добавить тренажер</Typography>
        </div>
        <ModalWindow isVisible={isVisibleAddLink} setIsVisible={setIsVisibleAddLink}>
           <AddLink id={resourceId} setVisible={setIsVisibleAddLink} />
        </ModalWindow>
     </>
  );

  const addResource = () => (
     <>
        <div className={cls.add_resource__btn} onClick={() => setIsVisibleResource(true)}>
           <Typography variant='body'>Добавить ресурс</Typography>
        </div>
        <ModalWindow isVisible={isVisibleAddResource} setIsVisible={setIsVisibleResource}>
           <UploadResource id={resourceId} setIsVisible={setIsVisibleResource} />
        </ModalWindow>
     </>
  );

  const trainingContent = () => dataCourse?.data?.topics.map((topic) => (
    topic.id === resourceId && topic.training_apparatuses.map((training_apparatus) => (
       <>
          <a
            className={cls.link}
            href={training_apparatus.link}
            target='_blank'
            rel='noreferrer'
          >
             {training_apparatus.description}
          </a>
       </>
    ))

  ));

  const setId = (resType: string, resId: any) => {
    setResourceId(resId);
    setResourceType(resType);
  };

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className={cls.course__name}>
              <Typography variant='h2' color='violet-primary'>
                 {dataCourse?.data?.name}
              </Typography>
           </div>
           <div className={cls.course__content}>
              <div className={cls.themes__wrapper}>
                 <div className={cls.themes__list}>
                    {
                            dataCourse?.data?.topics.map((topic) => (
                               <div className={cls.theme__item} key={topic.id}>
                                  <div className={cls.theme__title}>
                                     <Typography variant='small' tag='span'>
                                        {topic.name}
                                     </Typography>
                                  </div>
                                  <div className={cls.theme_variants__list}>
                                     <div
                                       className={cls.theme_variant__item}
                                       onClick={() => setId('video', topic.id)}
                                     >
                                        <Typography variant='small'>
                                           Видео
                                        </Typography>
                                     </div>
                                     <div
                                       className={cls.theme_variant__item}
                                       onClick={() => setId('presentation', topic.id)}
                                     >
                                        <Typography variant='small'>
                                           Презентации
                                        </Typography>
                                     </div>
                                     <div
                                       className={cls.theme_variant__item}
                                       onClick={() => setId('lecture', topic.id)}
                                     >
                                        <Typography variant='small'>
                                           Лекции
                                        </Typography>
                                     </div>
                                     <div
                                       className={cls.theme_variant__item}
                                       onClick={() => setId('training', topic.id)}
                                     >
                                        <Typography variant='small'>
                                           Тренажеры
                                        </Typography>
                                     </div>
                                  </div>
                               </div>
                            ))
                        }
                 </div>
                 {
                      localStorage.getItem('token')
                      && (
                      <Button variant='xs' border onClick={() => setIsVisibleCreateTopic(true)}>
                         Создать тему
                      </Button>
                      )
                  }
              </div>

              {
                  resourceType === 'video'
                    ? (
                       <>
                          {videoContent()}
                          {addResource()}
                       </>
                    )
                    : resourceType === 'lecture'
                      ? (
                         <>
                            {lectureContent()}
                            {addResource()}
                         </>
                      )
                      : resourceType === 'presentation'
                        ? (
                           <>
                              {presentationContent()}
                              {addResource()}
                           </>
                        )
                        : resourceType === 'training' && (
                        <>
                           <div className={cls.links__wrapper}>{trainingContent()}</div>
                           {addTraining()}
                        </>
                        )
               }
           </div>
        </div>
        <ModalWindow isVisible={isVisibleCreateTopic} setIsVisible={setIsVisibleCreateTopic}>
           <CreateTopic id={id} setVisible={setIsVisibleCreateTopic} />
        </ModalWindow>
     </div>
  );
};

export const CoursePage = React.memo(Component);
