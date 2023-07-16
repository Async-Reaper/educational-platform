import React from 'react';
import { ModalWindow } from 'shared/ui';
import { AuthFormAsync } from '../AuthForm/AuthForm.async';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: Props) => (
   <ModalWindow
     isOpen={isOpen}
     onClose={onClose}
   >
      <AuthFormAsync onSuccess={onClose} />
   </ModalWindow>
);
