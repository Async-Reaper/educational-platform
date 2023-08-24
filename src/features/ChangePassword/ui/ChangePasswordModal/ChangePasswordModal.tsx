import React from 'react';
import { ModalWindow } from 'shared/ui';
import { ChangePasswordFormAsync } from '../ChangePasswordForm/ChangePasswordForm.async';

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

export const ChangePasswordModal = ({ isOpen, onClose }: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <ChangePasswordFormAsync onSuccess={onClose} />
   </ModalWindow>
);
