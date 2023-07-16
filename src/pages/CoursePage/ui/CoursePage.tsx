import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Sidebar } from 'widgets/Sidebar';
import { Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getCourse, courseData } from 'entities/Course';
import { createTopicIsSuccess } from 'features/CreateTopic';
import { deleteTopicIsSuccess } from 'features/DeleteTopic';
import { TopicList } from 'widgets/TopicList';
import cls from './styles.module.scss';

const Component = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const dataCourse = useSelector(courseData);
  const statusCreateTopic = useSelector(createTopicIsSuccess);
  const statusDeleteTopic = useSelector(deleteTopicIsSuccess);

  useEffect(() => {
    dispatch(getCourse(id));
  }, [statusCreateTopic, statusDeleteTopic]);

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className={cls.course__name}>
              <Typography variant='h3' color='violet-primary'>
                 {dataCourse?.name}
              </Typography>
           </div>
           <div className={cls.course__description}>
              <Typography tag='span' variant='small' color='gray-primary'>
                 {dataCourse?.description}
              </Typography>
           </div>
           <div className={cls.themes__list}>
              <div className={cls.themes__list_title}>
                 <Typography tag='span' variant='body' color='violet-primary'>
                    Доступные темы
                 </Typography>
              </div>
              <TopicList idCourse={Number(id)} />
           </div>
        </div>
     </div>
  );
};

export default Component;
