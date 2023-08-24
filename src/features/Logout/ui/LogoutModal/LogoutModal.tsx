import React from 'react';
import { ModalWindow } from 'shared/ui';
import { LogoutFormAsync } from '../LogoutForm/LogoutForm.async';

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

const Component = ({ isOpen, onClose }: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <LogoutFormAsync onSuccess={onClose} />
   </ModalWindow>
);

export const LogoutModal = React.memo(Component);
