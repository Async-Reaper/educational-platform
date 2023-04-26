import React, {
  type FC, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {
  popupText: string
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void
}

const Component: FC<Props> = ({ popupText, isVisible, setIsVisible }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  return (
     <div
       className={classNames(cls.popup__wrapper, [], { [cls.active]: isVisible })}
       onClick={() => setIsVisible(false)}
     >
        <div className={cls.popup_content}>
           <Typography variant='small' tag='span'>
              {popupText}
           </Typography>
        </div>
     </div>
  );
};

export const PopupWindow = React.memo(Component);
