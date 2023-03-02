import React from 'react';
import { ColoredIcon, Icon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.video__lessons}>
      <div className={cls.video__lessonsTopIcon}>
         <ColoredIcon name='line' width={64} height={4} />
      </div>
      <div className={cls.title}>
         <Typography tag='h1' variant='h1' uppercase>
            Talent Q: 6 шагов к успеху
         </Typography>
      </div>
      <div className={cls.videoWrapper}>
         <div className={cls.videoTitle}>
            <Typography tag='h2' variant='h2'>
               Изучите видеоуроки
            </Typography>
         </div>
         <div className={cls.video}>
            <div className='video'>
               <video src='' />
            </div>
            <div className={cls.videoBenefits} />
         </div>
         <div className={cls.lessons__list}>
            <div className={cls.lesson__item}>
               <video src='' />
               <Typography tag='h3' variant='h3'>
                  Как успевать в отведенное время?
               </Typography>
            </div>
            <div className={cls.lesson__item}>
               <video src='' />
               <Typography tag='h3' variant='h3'>
                  Как успевать в отведенное время?
               </Typography>
            </div>
            <div className={cls.lesson__item}>
               <video src='' />
               <Typography tag='h3' variant='h3'>
                  Как успевать в отведенное время?
               </Typography>
            </div>
            <div className={cls.lesson__text}>
               <Icon name='megaphone' />
               <Typography tag='h3' variant='h3'>
                  Об этом и не только расскажет практикующий эксперт Антон Добрышин.
               </Typography>
            </div>
         </div>
      </div>
   </div>
);

export const VideoLessons = React.memo(Component);
