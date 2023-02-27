import React, {type FC, ReactNode} from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Variant =
    | 'xs'
    | 'l'
    | 'm'
    | 'xl';

type Props = {
  variant?: Variant
  color?: Colors;
  border?: boolean;
  children: ReactNode;
  full?: boolean
};
const Component: FC<Props> = (props) => {
  const {
    variant = 'l',
    color = 'primary',
    children,
    border = false,
    full = false,
    ...otherProps
  } = props;

  return (
     <button
       className={classNames(
         cls.button,
         [cls[`variant--${variant}`],
           cls[`color--${color}`]],
         {
           [cls.full]: full,
           [cls.border]: border,
         },
       )}
       {...otherProps}
     >
        {children}
     </button>
  );
};

export const Button = React.memo(Component);
