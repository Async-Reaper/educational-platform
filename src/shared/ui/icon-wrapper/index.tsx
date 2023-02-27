import React from 'react';

import cls from './styles.module.scss';

interface Props {
  icon: React.ReactNode
  rotate?: number
}

const Component: React.FC<Props> = ({ icon, rotate = 0 }) => (
   <div className={cls.icon__wrapper} style={{ transform: `rotate(${rotate}deg)` }}>
      {icon}
   </div>
);

export const IconWrapper = React.memo(Component);
