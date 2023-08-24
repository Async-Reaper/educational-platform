import React from 'react';
import { Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';
import { ILessonItem } from '../types';

interface Props {
   lesson: ILessonItem
}

const Component = ({ lesson }: Props) => (
   <a href={lesson.link} target='_blank' className={cls.lesson} rel='noreferrer'>
      <div className={cls.video}>
         <ColoredIcon
            className={cls.play__icon}
            name='play_button_player'
            size={24}
            color='gray-primary'
         />
      </div>
      <Typography tag='h3' variant='h3' color='gray-primary'>
         {lesson.name}
      </Typography>
   </a>
);

export const LessonItem = React.memo(Component);
