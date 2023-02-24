import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
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
} & LinkProps;

const Component: FC<Props> = (props) => {
  const {
    to,
    className = '',
    children,
    variant = Variants.PRIMARY,
    ...otherProps
  } = props;

  return (
     <Link
       to={to}
       className={classNames(cls.AppLink, [className], { [cls[variant]]: true })}
       {...otherProps}
     >
        {children}
     </Link>
  );
};

export const AppLink = Component;
