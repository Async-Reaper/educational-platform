import React, { Dispatch, FC, SetStateAction } from 'react';
import { ModalWindow } from 'shared/ui';
import { AddAnswerComment } from 'features/add-answer-comment/ui/form';

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  commentId: number;
}

const Component: FC<Props> = (props) => (
   <div>
      <ModalWindow isVisible={props.isVisible} setIsVisible={props.setIsVisible}>
         <AddAnswerComment id={props.commentId} setVisible={props.setIsVisible} />
      </ModalWindow>
   </div>
);

export const ModalAnswerComment = React.memo(Component);
