import React from 'react';
import { ModalWindow } from 'shared/ui';
import { AddCommentFormAsync } from '../AddCommentForm/AddCommentForm.async';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

export const AddCommentModal = ({ isOpen, onClose, id }: Props) => (
   <ModalWindow
     isOpen={isOpen}
     onClose={onClose}
   >
      <AddCommentFormAsync id={id} onSuccess={onClose} />
   </ModalWindow>
);
