import React, { useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import cls from '../styles.module.scss';
import { ModalWindow, Typography } from '../../../../shared/ui';
import { AddComment } from '../../../../features/add-comment/ui';
import { CommentsList } from '../../../../widgets/comments-list';

interface Props {
  id: number;
}

const Component: React.FC<Props> = ({ id }) => {
  const [isVisibleAddComment, setIsVisibleAddComment] = useState(false);

  return (
     <>
        <div className={cls.add_comment__btn} onClick={() => setIsVisibleAddComment(true)}>
           <AddCommentIcon />
           <Typography variant='small' tag='span'>Оставить комментарий</Typography>
        </div>
        <ModalWindow isVisible={isVisibleAddComment} setIsVisible={setIsVisibleAddComment}>
           <AddComment id={id} setVisible={setIsVisibleAddComment} />
        </ModalWindow>
        <CommentsList id={id} />
     </>
  );
};

export const Comments = React.memo(Component);
