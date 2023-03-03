import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.subtitle}>
      <Typography tag='h2' variant='h2'>
         Пройдите верификацию
         и прокторинг
      </Typography>
   </div>
);

export const Subtitle = React.memo(Component);
