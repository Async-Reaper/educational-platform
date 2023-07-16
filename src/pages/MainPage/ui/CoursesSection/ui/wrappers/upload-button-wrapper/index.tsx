import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.upload__buttonWrapper}>
      {children}
   </div>
);

export const UploadButtonWrapper = React.memo(Component);
