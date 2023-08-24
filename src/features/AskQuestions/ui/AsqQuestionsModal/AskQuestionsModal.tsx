import React from 'react';
import { ModalWindow } from 'shared/ui';
import { AskQuestionsFormAsync } from '../AsqQuestionsForm/AskQuestionsForm.async';

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

export const AskQuestionsModal = ({ isOpen, onClose }: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <AskQuestionsFormAsync onSuccess={onClose} />
   </ModalWindow>
);
