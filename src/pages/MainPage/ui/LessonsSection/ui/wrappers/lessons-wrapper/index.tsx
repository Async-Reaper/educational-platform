import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.lessonsWrapper}>
      {children}
   </div>
);

export const LessonsWrapper = React.memo(Component);
