import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.questions__content}>
      {children}
   </div>
);

export const QuestionsContent = React.memo(Component);
