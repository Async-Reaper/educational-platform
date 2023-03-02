import React from 'react';
import { Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.lesson}>
      <div className={cls.video}>
         <ColoredIcon
           className={cls.play__icon}
           name='play_button_player'
           size={24}
           color='gray-primary'
         />
         <div className={cls.duration}>07:41</div>
      </div>
      <Typography tag='h3' variant='h3' color='gray-primary'>
         Как успевать в отведенное время?
      </Typography>
   </div>
);

export const Lesson = React.memo(Component);
