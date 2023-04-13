import React, { ReactNode } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import { Typography } from '../index';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
  isVisible: boolean;
}

const Component: React.FC<Props> = ({ children, isVisible }) => (
   <div className={classNames(cls.toolbar, [], { [cls.active]: isVisible })}>
      <div className={cls.toolbar__bottom}>
         <Typography tag='span' variant='small'>{children}</Typography>
      </div>
   </div>
);

export const Toolbar = React.memo(Component);
