import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import { LessonItem } from 'pages/main-page/ui/lessons-section/model/lessons';
import cls from './styles.module.scss';

interface Props {
  lesson: LessonItem
}

const Component: FC<Props> = ({ lesson }) => (
   <a href={lesson.link} target='_blank' className={cls.lesson}>
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

export const Lesson = React.memo(Component);
