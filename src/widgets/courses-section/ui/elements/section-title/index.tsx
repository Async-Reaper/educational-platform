import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.section__title}>
      <Typography tag='h3' variant='h2' color='gray-primary'>Популярные курсы</Typography>
   </div>
);

export const SectionTitle = React.memo(Component);
