import React from 'react';
import {
  Button, DragDrop, Input, Typography,
} from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.signup__wrapper}>
      <Input placeholder='Ваш номер телефона' />
      <Input placeholder='Ваш имя' />
      <Input placeholder='Ваш фамилия' />
      <DragDrop multiple={false} labelText='Загрузите аватарку' />
      <Button variant='xs' background='violet-primary'>
         <Typography variant='h3'>Вход</Typography>
      </Button>
   </div>
);

export const Signup = React.memo(Component);
