import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.content__title}>
      <Typography tag='h1' variant='h2' color='gray-primary'>
          Определи свою специальность
      </Typography>
   </div>
);

export const ContentTitle = React.memo(Component);
