import React, { type FC, ReactNode } from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
   <div className={cls.error_text__wrapper}>
      <Typography variant='body' tag='span'>
         *
         {children}
      </Typography>
   </div>
);

export const ErrorText = React.memo(Component);
