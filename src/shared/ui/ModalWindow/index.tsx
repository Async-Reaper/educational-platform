import React from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';
import { Portal } from '../Portal';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  dataTestId?: string;
}

const Component: React.FC<Props> = (props) => {
  const {
    isOpen = false,
    onClose,
    children,
    dataTestId,
  } = props;

  return (
     <Portal>
        <div
          className={classNames(cls.modal_window__wrapper, [], { [cls.active]: isOpen })}
          onClick={onClose}
          data-testid={dataTestId}
        >
           <div className={cls.modal_window__content} onClick={(event) => event.stopPropagation()}>
              {children}
           </div>
        </div>
     </Portal>
  );
};

export const ModalWindow = Component;
