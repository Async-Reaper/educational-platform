import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.used__titleWrapper}>
      { children }
   </div>
);

export const UsedTitleWrapper = React.memo(Component);
