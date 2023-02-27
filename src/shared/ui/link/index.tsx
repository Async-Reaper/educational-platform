import { Link, type LinkProps } from 'react-router-dom';
import React, { type FC } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

export enum Variants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

type Props = {
  className?: string;
  variant?: Variants;
  active?: boolean
} & LinkProps;

const Component: FC<Props> = (props) => {
  const {
    to,
    className = '',
    children,
    variant = Variants.PRIMARY,
    active = false,
    ...otherProps
  } = props;

  return (
     <Link
       to={to}
       className={classNames(
         cls.app_link,
         [className],
         { [cls[variant]]: true, [cls.active]: active },
       )}
       {...otherProps}
     >
        {children}
     </Link>
  );
};

export const AppLink = React.memo(Component);
