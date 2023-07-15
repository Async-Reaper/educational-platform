import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.videoTitle}>
      <Typography tag='h2' variant='h2' color='gray-primary'>
         Первый шаг к успеху - эффективность!
      </Typography>
   </div>
);

export const VideoTitle = React.memo(Component);
