import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <>
      <ColoredIcon
        className={cls.first__wave}
        name='second_wave'
        width={window.innerWidth}
        height={550}
      />
      <ColoredIcon
        className={cls.second__wave}
        name='third_wave'
        width={window.innerWidth}
        height={550}
      />
   </>
);

export const TopIcons = React.memo(Component);
