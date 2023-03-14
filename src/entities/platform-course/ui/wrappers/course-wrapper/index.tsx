import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
  onClick: () => void;
}
const Component: FC<Props> = (props) => {
  const {
    children,
    onClick,
  } = props;
  return (
     <div className={cls.course__wrapper} onClick={onClick}>
        {children}
     </div>
  );
};

export const CourseWrapper = React.memo(Component);
