import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.upload__courseWrapper}>
      {children}
   </div>
);

export const UploadCourseWrapper = React.memo(Component);
