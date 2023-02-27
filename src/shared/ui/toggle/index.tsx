import React, { Dispatch, type FC, SetStateAction } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Variant =
   | 'xs'
   | 'l'
   | 'xl';

type Props = {
  variant?: Variant;
  isActive: boolean;
  handler: Dispatch<SetStateAction<boolean>>,
  color?: Colors,
  background?: Colors,
};

const Component: FC<Props> = (props) => {
  const {
    variant = 'l',
    isActive = false,
    handler,
    color = 'primary',
    background = 'primary',
  } = props;

  const changeToggle = () => (
    handler((prevState) => !prevState)
  );

  return (
     <div
       onClick={changeToggle}
       className={classNames(cls.toggle, [cls[`variant--${variant}`],
         cls[`background--${background}`]], { [cls.active]: isActive })}
     >
        <div className={classNames(
          cls.toggleSlider,
          [cls[`variant--${variant}`], cls[`color--${color}`]],
        )}
        />
     </div>
  );
};

export const Toggle = React.memo(Component);
