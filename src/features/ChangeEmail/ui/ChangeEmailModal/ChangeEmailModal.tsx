import React from 'react';
import { ModalWindow } from 'shared/ui';
import { ChangeEmailFormAsync } from '../ChangeEmailForm/ChangeEmailForm.async';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangeEmailModal = ({ isOpen, onClose }: Props) => (
   <ModalWindow
     isOpen={isOpen}
     onClose={onClose}
   >
      <ChangeEmailFormAsync onSuccess={onClose} />
   </ModalWindow>
);
