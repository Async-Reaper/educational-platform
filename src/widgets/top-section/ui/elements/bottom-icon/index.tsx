import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.bottom__icon}>
      <ColoredIcon name='wave' width={window.innerWidth} height={731} />
   </div>
);

export const BottomIcon = React.memo(Component);
