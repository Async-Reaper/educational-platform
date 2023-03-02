import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
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
         <div>
            <div className="video">
               
            </div>
         </div>
      </div>
   </div>
);

export const VideoLessons = React.memo(Component);
