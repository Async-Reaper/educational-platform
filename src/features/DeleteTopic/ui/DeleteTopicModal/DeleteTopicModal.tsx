import React from 'react';
import { ModalWindow, Typography } from 'shared/ui';
import { DeleteTopicFormAsync } from '../DeleteTopicForm/DeleteTopicForm.async';
import cls from './styles.module.scss';

interface Props {
  topicId: number;
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteTopicModal = ({ topicId, isOpen, onClose }: Props) => (
   <>

      <ModalWindow
        isOpen={isOpen}
        onClose={onClose}
      >
         <DeleteTopicFormAsync
           idTopic={topicId}
           onSuccess={onClose}
         />
      </ModalWindow>
   </>
);
