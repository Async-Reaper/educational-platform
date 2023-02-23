import React, { type FC, type ReactNode } from 'react';

type Props = {
  children: ReactNode
};

const Component: FC<Props> = ({ children }) => {
   <main>
      {children}
   </main>;
};

export const MainLayout = Component;
