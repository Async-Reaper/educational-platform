import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}
const Component: FC<Props> = ({ children }) => (
   <div className={cls.used__item}>
      {children}
   </div>
);

export const UsedItem = React.memo(Component);
