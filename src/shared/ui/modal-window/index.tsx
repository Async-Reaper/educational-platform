import React, { Dispatch, SetStateAction, useState } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';
import {Portal} from "../portal";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Component: React.FC<Props> = (props) => {
  const {
    isVisible = false,
    setIsVisible,
    children,
  } = props;

  return (
      <Portal>
         <div
           className={classNames(cls.modal_window__wrapper, [], { [cls.active]: isVisible })}
           onClick={() => setIsVisible(false)}
         >
            <div className={cls.modal_window__content} onClick={(event) => event.stopPropagation()}>
               {children}
            </div>
         </div>
      </Portal>
  );
};

export const ModalWindow = Component;
