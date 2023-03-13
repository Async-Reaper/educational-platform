import React, {Dispatch, type FC, ReactNode, SetStateAction} from 'react';
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
     >
        {children}
     </button>
  );
};

export const Button = React.memo(Component);
