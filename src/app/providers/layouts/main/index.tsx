import React, { type FC, type ReactNode } from 'react';
import cls from './styles.module.scss';

type Props = {
   children: ReactNode
};

// eslint-disable-next-line react/function-component-definition
const Component: FC<Props> = ({ children }) => (
   <main className={cls.content}>
      {children}
   </main>
);

export const MainLayout = Component;
