import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.icons__title}>
      <Typography tag='h1' variant='h2' color='gray-primary'>Тест нашего эксперта</Typography>
   </div>
);

export const IconsTitle = React.memo(Component);
