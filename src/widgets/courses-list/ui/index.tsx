import React, { useEffect, useState } from 'react';
import { AppLink } from 'shared/ui';
import { PlatformCourse } from 'entities';
import { getCourse } from 'widgets/courses-list/api/getCourse';
import axios from 'axios';
import { CourseType } from 'widgets/courses-list/types';
import cls from './styles.module.scss';

const Component = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);

  // eslint-disable-next-line consistent-return
  async function arr() {
    try {
      const response = await axios.get<CourseType[]>('http://localhost:8000/courses/get-courses');
      const res = response.data;
      setCourses(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    arr();
  }, []);

  return (
     <div className={cls.courses__wrapper}>
        {
             courses?.map((course) => (
                <AppLink to='/course'>
                   <PlatformCourse name={course.title} creator={course.creator} />
                </AppLink>
             ))
         }
     </div>
  );
};

export const CoursesList = React.memo(Component);
