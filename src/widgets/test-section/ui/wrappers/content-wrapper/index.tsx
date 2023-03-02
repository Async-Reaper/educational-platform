import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.content__wrapper}>
      {children}
   </div>
);

export const ContentWrapper = React.memo(Component);
