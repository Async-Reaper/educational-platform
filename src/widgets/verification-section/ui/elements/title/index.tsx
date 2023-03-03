import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <Typography tag='h1' variant='h1' color='violet-primary' uppercase>
      верификация
   </Typography>
);

export const Title = React.memo(Component);
