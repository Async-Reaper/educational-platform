import React, { useEffect, useState } from 'react';
import { AppLink, Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { CoursesType, getAllCourse } from 'widgets/CoursesList';
import { Sidebar } from 'widgets/Sidebar';
import cls from './styles.module.scss';

const Component = () => {
  const [coursesList, setCoursesList] = useState(JSON.parse(localStorage.getItem('grouped_courses') || ''));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  const navigate = useNavigate();

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className={cls.link_back} onClick={() => navigate(-1)}>
              <div className={cls.back_icon}>
                 <ColoredIcon name='play_button_player' size={16} />
              </div>
              <Typography tag='span' variant='small'>
                 Назад к курсам
              </Typography>
           </div>
           <div className={cls.name_block}>
              <Typography variant='h3' color='violet-primary'>Обучение по дисциплинам</Typography>
           </div>
           <div className={cls.courses__wrapper}>
              {coursesList.map((course: CoursesType) => (
                 <AppLink to={`/course/${course.id}`} className={cls.course__link}>
                    <div aria-label={course.id.toString()} className={cls.course__wrapper}>
                       <div
                         className='course__title'
                       >
                          <Typography tag='h1' variant='body'>{course.name}</Typography>
                       </div>
                    </div>
                 </AppLink>
              ))}
           </div>
        </div>
     </div>
  );
};

export default Component;
