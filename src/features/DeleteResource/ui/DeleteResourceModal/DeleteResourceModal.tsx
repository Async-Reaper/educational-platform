import React from 'react';
import { ModalWindow } from 'shared/ui';
import { DeleteResourceFormAsync } from '../DeleteResourceForm/DeleteResourceForm.async';

interface Props {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteResourceModal = ({ id, isOpen, onClose }: Props) => (
   <ModalWindow
     isOpen={isOpen}
     onClose={onClose}
   >
      <DeleteResourceFormAsync id={id} onSuccess={onClose} />
   </ModalWindow>
);
