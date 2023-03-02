import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.lessons__sectionTitle}>
      <Typography tag='h1' variant='h1' uppercase color='gray-primary'>
         Talent Q: 6 шагов к успеху
      </Typography>
   </div>
);

export const SectionTitle = React.memo(Component);
