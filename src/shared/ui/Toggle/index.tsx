import React, { Dispatch, type FC, SetStateAction } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Props = {
   variant?: DesignSystemSize;
   isActive: boolean;
   handler: Dispatch<SetStateAction<boolean>>,
   color?: DesignSystemColors,
   background?: DesignSystemColors,
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

   const addToggle = [
      cls[`variant--${variant}`],
      cls[`background--${background}`],
   ];
   const modsToggle = {
      [cls.active]: isActive,
   };

   const addToggleSlider = [
      cls[`variant--${variant}`],
      cls[`color--${color}`],
   ];

   return (
      <div
         onClick={changeToggle}
         className={classNames(cls.toggle, addToggle, modsToggle)}
      >
         <div className={classNames(
            cls.toggleSlider,
            addToggleSlider,
         )}
         />
      </div>
   );
};

export const Toggle = React.memo(Component);
