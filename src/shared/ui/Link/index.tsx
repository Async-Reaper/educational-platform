import { Link, type LinkProps } from 'react-router-dom';
import React, { type FC } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

export type Variants =
  | 'primary'
  | 'secondary'
  | 'red';

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
      variant = 'primary',
      active = false,
      ...otherProps
   } = props;

   return (
      <Link
         to={to}
         className={classNames(
            cls.app_link,
            [className],
            { [cls[variant]]: variant, [cls.active]: active },
         )}
         {...otherProps}
      >
         {children}
      </Link>
   );
};

export const AppLink = React.memo(Component);
