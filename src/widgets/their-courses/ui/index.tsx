import React from 'react';
import { AppLink, Typography } from 'shared/ui';
import { PlatformCourse } from 'entities';
import { CourseType } from 'widgets/courses-list/types';

const Component = () => {
  const courses: CourseType[] | null = [];
  return (
     <div className='main__courses'>
        { courses.length > 0
          ? courses?.map((course: any) => (
             <AppLink to='/course'>
                <PlatformCourse name={course?.title} />
             </AppLink>
          ))
          : (
             <Typography variant='h1' color='black-bg'>
                У вас нет личных курсов((
             </Typography>
          )}
     </div>
  );
};

export const TheirCourses = Component;
