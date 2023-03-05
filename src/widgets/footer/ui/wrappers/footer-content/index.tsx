import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.footer__content}>
      {children}
   </div>
);

export const FooterContent = React.memo(Component);
