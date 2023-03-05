import React, { type FC } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {
  text: string;
}
const Component: FC<Props> = ({ text }) => (
   <li className={cls.text__item}>
      <ColoredIcon name='play_button_player' />
      <Typography variant='body' color='gray-primary'>
         {text}
      </Typography>
   </li>
);

export const ExaminationTextItem = React.memo(Component);
