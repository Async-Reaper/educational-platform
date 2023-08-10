import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}
const Component: FC<Props> = ({ children }) => (
   <div className={cls.black__gradient}>
      {children}
   </div>
);

export const BlackGradient = React.memo(Component);
