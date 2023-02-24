import React, { type FC, type ReactNode } from 'react';

type Props = {
  children: ReactNode
};

// eslint-disable-next-line react/function-component-definition
const Component: FC<Props> = ({ children }) => (
   <main>
      {children}
   </main>
);

export const MainLayout = Component;
