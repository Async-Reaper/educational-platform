import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import ReactPlayer from 'react-player';
import cls from './styles.module.scss';

const Component = () => {
  const course = {
    title: 'Программирование',
    files: {
      presentation: [
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/present.pptx?alt=media&token=7982220d-46af-428f-92e4-9c781e0c049d' },
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/present.pptx?alt=media&token=7982220d-46af-428f-92e4-9c781e0c049d' },
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/present.pptx?alt=media&token=7982220d-46af-428f-92e4-9c781e0c049d' },
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/present.pptx?alt=media&token=7982220d-46af-428f-92e4-9c781e0c049d' },
      ],
      lecture: [
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/doc.pdf?alt=media&token=5beee6ab-c765-4adb-9e97-2818744af7e2' },
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/doc.pdf?alt=media&token=5beee6ab-c765-4adb-9e97-2818744af7e2' },
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/doc.pdf?alt=media&token=5beee6ab-c765-4adb-9e97-2818744af7e2' },
        { title: 'Как правильно убрать?', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/doc.pdf?alt=media&token=5beee6ab-c765-4adb-9e97-2818744af7e2' },
      ],
      video: [
        { title: 'Введение в серверную разработку', file: 'https://firebasestorage.googleapis.com/v0/b/lexa-16464.appspot.com/o/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE.mp4?alt=media&token=ea208bb7-95da-4e01-b389-0c85a8843c49' },
        { title: 'Введение в серверную разработку', file: '/' },
        { title: 'Введение в серверную разработку', file: '/' },
      ],
    },
  };
  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <div className='course__wrapper'>
              <Typography>
                 {course.title}
              </Typography>
           </div>
           <div className={cls.variant_learning__wrapper}>
              <div className={cls.video__lessons}>
                 <video
                   src={course.files.video[0].file}
                   controls
                 >
                    <source src={course.files.video[0].file} />
                 </video>
                 <Typography variant='h3' color='gray-primary'>
                    {course.files.video[0].title}
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
                        course.files.presentation ? course.files.presentation.map((file) => (
                           <a href={file.file} download>
                              {file.title}
                           </a>
                        )) : null
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
                          course.files.lecture ? course.files.lecture.map((file) => (
                             <a href={file.file} target='_blank' rel='noreferrer'>
                                {file.title}
                             </a>
                          )) : null
                      }
                 </div>
              </div>
           </div>
        </div>
     </div>
  );
};

export const CoursePage = Component;
