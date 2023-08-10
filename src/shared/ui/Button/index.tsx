import React, { type FC, ReactNode } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Props = {
  variant?: DesignSystemSize
  background?: DesignSystemColors;
  border?: boolean;
  children: ReactNode;
  full?: boolean;
  ref?: React.Ref<any>;
  onClick?: (...args: any) => void,
  disabled?: boolean;
};

const Component: FC<Props> = (props) => {
  const {
    variant = 'l',
    background = 'violet-primary',
    children,
    border = false,
    full = false,
    ref,
    onClick,
    disabled = false,
    ...otherProps
  } = props;

  const additional = [
    cls[`variant--${variant}`],
    cls[`background--${background}`],
  ];

  const mods = {
    [cls.full]: full,
    [cls.border]: border,
  };

  return (
     <button
       ref={ref}
       className={classNames(
         cls.button,
         additional,
         mods,
       )}
       {...otherProps}
       onClick={() => onClick && onClick()}
       disabled={disabled}
     >
        {children}
     </button>
  );
};

export const Button = React.memo(Component);
