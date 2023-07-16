import React from 'react';
import { ModalWindow } from 'shared/ui';
import { AddLinkFormAsync } from 'features/AddLink/ui/AddLinkForm/AddLinkForm.async';

interface Props {
  id: number | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const AddLinkModal = ({ id, isOpen, onClose }: Props) => (
   <ModalWindow
     isOpen={isOpen}
     onClose={onClose}
   >
      <AddLinkFormAsync id={id} onSuccess={onClose} />
   </ModalWindow>
);
