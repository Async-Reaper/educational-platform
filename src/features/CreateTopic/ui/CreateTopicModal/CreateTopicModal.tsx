import React from 'react';
import { ModalWindow } from 'shared/ui';
import { CreateTopicFormAsync } from '../CreateTopicForm/CreateTopicForm.async';

interface Props {
   id: number | undefined;
   isOpen: boolean;
   onClose: () => void;
}

export const CreateTopicModal = ({ id, isOpen, onClose }: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <CreateTopicFormAsync id={id} onSuccess={onClose} />
   </ModalWindow>
);
