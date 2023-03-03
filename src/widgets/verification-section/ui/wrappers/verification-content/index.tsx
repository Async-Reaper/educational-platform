import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.verification__content}>
      {children}
   </div>
);

export const VerificationContent = React.memo(Component);
