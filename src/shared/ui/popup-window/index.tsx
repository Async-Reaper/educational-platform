import React, {
  type FC, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import { Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
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
    }, 3000);
  }, [isVisible, setIsVisible]);

  return (
     <div
       className={classNames(cls.popup__wrapper, [], { [cls.active]: isVisible })}
       onClick={() => setIsVisible(false)}
     >
        <div className={cls.popup_content}>
           <Icon name='check' />
           <Typography variant='small' tag='span'>
              {popupText}
           </Typography>
        </div>
        <div className={cls.popup_close}>
           <Icon name='plus' color='red-primary' />
        </div>
     </div>
  );
};

export const PopupWindow = React.memo(Component);
