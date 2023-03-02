import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.player}>
      <div className={cls.center}>
         <ColoredIcon className={cls.play} name='big_play' size={69} />
         <ColoredIcon className={cls.radar__circleSmall} name='radar_circle_small' size={139} />
         <ColoredIcon className={cls.radar__circleBig} name='radar_circle_big' size={224} />
      </div>
   </div>
);

export const Player = React.memo(Component);
