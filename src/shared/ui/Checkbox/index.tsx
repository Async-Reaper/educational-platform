import React, { Dispatch, type FC, SetStateAction } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

type Props = {
  variant?: DesignSystemSize;
  isActive: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
  color?: DesignSystemColors;
  background?: DesignSystemColors;
};

const Component: FC<Props> = (props) => {
  const {
    variant = 'l', isActive = true, handler, color = 'black-dark', background = 'black-ligth',
  } = props;

  const changeBox = () => handler((prevState) => !prevState);

  return (
     <div
       className={classNames(
         cls.checkboxWrapper,
         [cls[`variant--${variant}`], cls[`background--${background}`]],
       )}
       onClick={changeBox}
     >
        <div
          className={classNames(
            cls.checkboxContent,
            [cls[`variant--${variant}`], cls[`color--${color}`]],
          )}
        >
           {isActive
             ? <Icon name='check' color='gray-primary' />
             : null}
        </div>
     </div>
  );
};

export const Checkbox = React.memo(Component);
