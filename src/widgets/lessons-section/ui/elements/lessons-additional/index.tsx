import React from 'react';
import { Icon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.lesson__additional}>
      <Icon name='megaphone' width={48} height={55} />
      <Typography tag='h3' variant='h3' color='gray-primary'>
         Об этом и не только расскажет
         <span className={cls.color__part}> практикующий эксперт Антон Добрышин.</span>
      </Typography>
   </div>
);

export const LessonsAdditional = React.memo(Component);
