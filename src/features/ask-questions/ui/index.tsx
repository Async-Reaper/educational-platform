import React from 'react';
import {
  Button, Input, TextArea, Typography,
} from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.auth__wrapper}>
      <Input placeholder='Ваша почта' />
      <TextArea placeholder='Задайте вопросы, которые у вас возникли' />
      <Button variant='xs' background='violet-primary'>
         <Typography variant='h3'>Задать вопрос</Typography>
      </Button>
   </div>
);

export const AskQuestions = React.memo(Component);
