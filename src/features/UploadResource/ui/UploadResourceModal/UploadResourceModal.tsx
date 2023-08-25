import React from 'react';
import { ModalWindow } from 'shared/ui';
import { UploadResourceFormAsync } from '../UploadResourceForm/UploadResourceForm.async';

interface Props {
   id: number | undefined;
   isOpen: boolean;
   onClose: () => void;
   transTypeResource?: 'presentation ' | 'video' | 'lecture';
}

export const UploadResourceModal = ({
   id, isOpen, onClose, transTypeResource,
}: Props) => (
   <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
   >
      <UploadResourceFormAsync id={id} transTypeResource={transTypeResource} onSuccess={onClose} />
   </ModalWindow>
);
