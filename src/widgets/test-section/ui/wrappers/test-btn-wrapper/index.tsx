import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.test__btnWrapper}>
      {children}
   </div>
);

export const TestBtnWrapper = React.memo(Component);
