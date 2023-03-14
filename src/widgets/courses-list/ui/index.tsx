import React from 'react';
import { AppLink } from 'shared/ui';
import { coursesList } from 'widgets/courses-list/model/info';
import { PlatformCourse } from 'entities';
import { CourseType } from '../model/types';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.courses__wrapper}>
      {coursesList.map((course: CourseType) => (
         <AppLink to='/course'>
            <PlatformCourse
              name={course.title}
              onClick={() => localStorage.setItem('course', JSON.stringify(course.title))}
            />
         </AppLink>
      ))}
   </div>
);

export const CoursesList = React.memo(Component);
