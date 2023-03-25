import React from 'react';
import { Icon } from 'shared/libs/icons';
import { Button, Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.content__buttons}>
      <Button variant='l' background='violet-primary'>
         <Typography tag='span' variant='body'>
            Начать сейчас
         </Typography>
         <Icon name='play' size={22} />
      </Button>
      <Button variant='l' background='gray-primary' border>
         <Typography tag='span' variant='body'>
            Подробнее
         </Typography>
         <Icon name='arrow_right' width={30} height={10} color='violet-primary' />
      </Button>
   </div>
);

export const ButtonsGroup = React.memo(Component);
