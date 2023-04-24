import React, { useEffect } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { getCourse } from 'entities/course/model/api';
import { getCourseSelector } from 'entities/course';
import { TopicList } from 'widgets';
import cls from './styles.module.scss';

const Component = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const dataCourse = getCourseSelector();

  useEffect(() => {
    dispatch(getCourse(id));
  }, []);

  return (
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
              <TopicList idCourse={id} />
           </div>
        </div>
     </div>
  );
};

export default Component;
