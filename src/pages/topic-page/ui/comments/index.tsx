import React, { useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { ModalWindow, Typography } from 'shared/ui';
import { AddComment } from 'features/add-comment/ui';
import { CommentsList } from 'widgets';
import cls from '../styles.module.scss';

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
