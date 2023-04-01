import React, { useEffect } from 'react';
import { AppLink, Typography } from 'shared/ui';
import { getAllCoursesSelector } from 'widgets/courses-list/model/selector/getAllCoursesSelector';
import { CoursesType } from 'widgets/courses-list/model/types';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { getAllCourse } from 'widgets/courses-list/model/api/getAllCourse';
import cls from './styles.module.scss';

const Component = () => {
  const coursesList = getAllCoursesSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  return (
     <div className={cls.courses__wrapper}>
        {coursesList.data?.map((course: CoursesType) => (
           <AppLink to={`/course/${course.id}`}>
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
  );
};

export const CoursesList = React.memo(Component);
