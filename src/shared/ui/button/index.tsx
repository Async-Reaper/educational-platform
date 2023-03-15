import React, {
  Dispatch, type FC, ReactNode, SetStateAction,
} from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Variant =
    | 'xs'
    | 'l'
    | 'm'
    | 'xl';

type Props = {
  variant?: Variant
  background?: Colors;
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

  return (
     <button
       ref={ref}
       className={classNames(
         cls.button,
         [cls[`variant--${variant}`],
           cls[`background--${background}`],
         ],
         {
           [cls.full]: full,
           [cls.border]: border,
         },
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
