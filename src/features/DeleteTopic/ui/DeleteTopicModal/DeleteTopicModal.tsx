import React from 'react';
import { ModalWindow } from 'shared/ui';
import { DeleteTopicFormAsync } from '../DeleteTopicForm/DeleteTopicForm.async';

interface Props {
   topicId: number;
   isOpen: boolean;
   onClose: () => void;
}

export const DeleteTopicModal = ({ topicId, isOpen, onClose }: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <DeleteTopicFormAsync
         idTopic={topicId}
         onSuccess={onClose}
      />
   </ModalWindow>
);
