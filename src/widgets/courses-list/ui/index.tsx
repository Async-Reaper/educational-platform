import React from 'react';
import { AppLink, Typography } from 'shared/ui';
import { coursesList } from 'widgets/courses-list/model/info';
import { CourseType } from '../model/types';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.courses__wrapper}>
      {coursesList.map((course: CourseType, index) => (
         <AppLink to='/course'>
            <div aria-label={index.toString()} className={cls.course__wrapper}>
               <div
                 className='course__title'
                 onClick={() => localStorage.setItem('course', JSON.stringify(course.title))}
               >
                  <Typography tag='h1' variant='body'>{course.title}</Typography>
               </div>
            </div>
         </AppLink>
      ))}
   </div>
);

export const CoursesList = React.memo(Component);
