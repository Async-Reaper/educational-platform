import React from 'react';
import { ModalWindow } from 'shared/ui';
import { AddAnswerCommentFormAsync } from '../AddAnswerCommentForm/AddAnswerCommentForm.async';

interface Props {
   isOpen: boolean;
   onClose: () => void;
   commentId: number;
}

export const AddAnswerCommentModal = ({ isOpen, onClose, commentId }: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <AddAnswerCommentFormAsync id={commentId} onSuccess={onClose} />
   </ModalWindow>
);
