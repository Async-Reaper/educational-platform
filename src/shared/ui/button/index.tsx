import React, { type FC } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Variant =
  | 'xs'
  | 'l'
  | 'xl';

type Props = {
  variant?: Variant
  color?: Colors;
  children: string;
  full?: boolean
};
const Component: FC<Props> = (props) => {
  const {
    variant = 'l',
    color = 'primary',
    children,
    full = false,
    ...otherProps
  } = props;

  return (
     <button
       className={classNames(
         cls.button,
         [cls[`variant--${variant}`],
           cls[`color--${color}`]],

         { [cls.full]: full },
       )}
       {...otherProps}
     >
        {children}
     </button>
  );
};

export const Button = React.memo(Component);
