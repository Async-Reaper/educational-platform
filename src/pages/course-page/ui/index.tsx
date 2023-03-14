import React, { useEffect, useState } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import { getCourse } from 'pages/course-page/api';
import cls from './styles.module.scss';

type CourseFile = {
  title: string;
  file: string;
};

type Course = {
  title: string,
  files: {
    lecture: CourseFile[],
    presentation: CourseFile[],
    video: CourseFile[]
  };
};

enum CourseEnum {
  'Программирование' = 'programming',
  'Веб-дизайн' = 'web_design',
  'Средства защиты информации' = 'secure_information',
  '3Д моделирование' = '3d_modeling',
}
type CourseType =
    | 'programming'
    | 'web_design'
    | 'secure_information'
    | '3d_modeling';
const Component = () => {
  let courseName: CourseType;
  const [course, setCourse] = useState<Course>();

  if (JSON.parse(localStorage.getItem('course') || '') == 'Программирование') {
    courseName = 'programming';
  } else if (JSON.parse(localStorage.getItem('course') || '') == 'Веб-дизайн') {
    courseName = 'web_design';
  } else if (JSON.parse(localStorage.getItem('course') || '') == 'Средства защиты информации') {
    courseName = 'secure_information';
  } else if (JSON.parse(localStorage.getItem('course') || '') == '3Д моделирование') {
    courseName = '3d_modeling';
  }
  const data = async () => {
    const res = await getCourse(courseName);
    setCourse(res);
  };

  useEffect(() => {
    data();
  }, []);
  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className={cls.course__name}>
              <Typography variant='h3' color='violet-primary'>
                 {JSON.parse(localStorage.getItem('course') || '')}
              </Typography>
           </div>
           <div className={cls.variant_learning__wrapper}>
              <div className={cls.video__lessons}>
                 <video
                   src={course?.files.video[0].file}
                   controls
                 >
                    <source src={course?.files.video[0].file} />
                 </video>
                 <Typography variant='h3' color='gray-primary'>
                    {course?.files.video[0].title}
                 </Typography>
              </div>
              <div className={cls.variant_learning}>
                 <div className={cls.variant__name}>
                    <div className={cls.number}>
                       <ColoredIcon name='presentation' width={42} height={37} />
                    </div>
                    <div className='variant__title'>
                       <Typography tag='strong' variant='h3' color='violet-secondary'>
                          Презентации
                       </Typography>
                    </div>
                 </div>
                 <div className={cls.variant_files__wrapper}>
                    {
                        course?.files.presentation
                          ? course?.files.presentation.map((file: any) => (
                             <a href={file.file} download>
                                {file.title}
                             </a>
                          ))
                          : null
                     }
                 </div>
              </div>
              <div className={cls.variant_learning}>
                 <div className={cls.variant__name}>
                    <div className={cls.number}>
                       <ColoredIcon name='lecture' width={42} height={37} />
                    </div>
                    <div className='variant__title'>
                       <Typography tag='strong' variant='h3' color='violet-secondary'>
                          Лекции
                       </Typography>
                    </div>
                 </div>
                 <div className={cls.variant_files__wrapper}>
                    {
                          course?.files.lecture
                            ? course.files.lecture.map((file) => (
                               <a href={file.file} target='_blank' rel='noreferrer'>
                                  {file.title}
                               </a>
                            ))
                            : null
                      }
                 </div>
              </div>
           </div>
        </div>
     </div>
  );
};

export const CoursePage = Component;
