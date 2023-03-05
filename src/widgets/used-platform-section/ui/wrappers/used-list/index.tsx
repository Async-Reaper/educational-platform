import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}
const Component: FC<Props> = ({ children }) => (
   <div className={cls.used__list}>
      {children}
   </div>
);

export const UsedList = React.memo(Component);
