import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.subtitle__wrapper}>
      {children}
   </div>
);

export const SubtitleWrapper = React.memo(Component);
