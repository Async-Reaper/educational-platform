import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.verification__inner}>
      {children}
   </div>
);

export const VerificationInner = React.memo(Component);
