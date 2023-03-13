import React from 'react';
import { Button, Input, Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.auth__wrapper}>
      <Input placeholder='Ваш номер телефона' />
      <Button variant='xs' background='violet-primary'>
         <Typography variant='h3'>Вход</Typography>
      </Button>
   </div>
);

export const AuthPhone = React.memo(Component);
