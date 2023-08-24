import React, { useEffect, useState } from 'react';
import { AppLink, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { CoursesType, getAllCourse } from 'widgets/CoursesList';
import cls from './styles.module.scss';

const Component = () => {
   const [coursesList] = useState(JSON.parse(localStorage.getItem('grouped_courses') || ''));
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAllCourse());
   }, []);

   const navigate = useNavigate();

   return (
      <>
         <div className={cls.link_back} onClick={() => navigate(-1)}>
            <div className={cls.back_icon}>
               <Icon name='play' color='violet-primary' width={16} height={18} />
            </div>
            <Typography tag='span' variant='body'>
               Назад к курсам
            </Typography>
         </div>
         <div className={cls.name_block}>
            <Typography variant='h3' color='violet-primary'>Обучение по дисциплинам</Typography>
         </div>
         <div className={cls.courses__wrapper}>
            {coursesList.map((course: CoursesType) => (
               <AppLink key={course.id} to={`/course/${course.id}`} className={cls.course__link}>
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
      </>
   );
};

export default Component;
