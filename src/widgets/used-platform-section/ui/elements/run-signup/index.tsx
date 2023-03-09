import React from 'react';
import { Button, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <Button variant='m' border>
      <Typography tag='span' variant='h3'>
         Поехали
      </Typography>
      <Icon className={cls.btn_icon} name='arrow_rounded' color='violet-primary' size={48} />
   </Button>
);

export const RunSignup = React.memo(Component);
