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

  const variants = [
    {
      name: 'Введение в программирование',
    },
    {
      name: 'Переменные и блоки',
    },
      {
          name: 'Переменные и блоки',
      },
      {
          name: 'Переменные и блоки',
      },
      {
          name: 'Переменные и блоки',
      },
      {
          name: 'Переменные и блоки',
      },
      {
          name: 'Переменные и блоки',
      },
  ];

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className={cls.course__name}>
              <Typography variant='h3' color='violet-primary'>
                 {JSON.parse(localStorage.getItem('course') || '')}
              </Typography>
           </div>
           <div className={cls.course__content}>
              <div className={cls.themes__wrapper}>
                 <div className={cls.themes__list}>
                    {
                           variants.map((variant) => (
                              <div className={cls.theme__item}>
                                 <div className={cls.theme__title}>
                                    <Typography variant='small' tag='span'>
                                       {variant.name}
                                    </Typography>
                                 </div>
                                 <div className={cls.theme_variants__list}>
                                    <div className={cls.theme_variant__item}>
                                       <Typography variant='small'>
                                          Видео
                                       </Typography>
                                    </div>
                                    <div className={cls.theme_variant__item}>
                                       <Typography variant='small'>
                                          Презентации
                                       </Typography>
                                    </div>
                                    <div className={cls.theme_variant__item}>
                                       <Typography variant='small'>
                                          Лекции
                                       </Typography>
                                    </div>
                                    <div className={cls.theme_variant__item}>
                                       <Typography variant='small'>
                                          Тренажеры
                                       </Typography>
                                    </div>
                                 </div>
                              </div>

                           ))
                       }

                 </div>
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
              </div>
           </div>
        </div>
     </div>
  );
};

export const CoursePage = Component;
