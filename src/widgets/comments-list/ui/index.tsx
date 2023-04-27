import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Typography } from 'shared/ui';
import { Comment } from 'widgets/comments-list/ui/comment';
import { AnswerComment } from 'widgets/comments-list/ui/answer-comment';
import { getAllComments, getAllCommentsSelector } from 'entities/comments';
import { getStatusAddCommentSelector } from 'features/add-comment';
import { getStatusAddAnswerSelector } from 'features/add-answer-comment';
import cls from './styles.module.scss';

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const statusAddComment = getStatusAddCommentSelector();
  const statusAddAnswerComment = getStatusAddAnswerSelector();
  const comments = getAllCommentsSelector();

  const handleGetAllComment = useCallback(() => {
    dispatch(getAllComments(id));
  }, [dispatch, id]);

  useEffect(() => {
    handleGetAllComment();
  }, [statusAddComment.isSuccess, statusAddAnswerComment.isSuccess]);

  return (
     <div className={cls.comments__wrapper}>
        {comments?.data?.length !== 0 && (
        <div className={cls.comments__title}>
           <Typography variant='body' color='violet-primary' tag='strong'>Комментарии</Typography>
        </div>
        )}
        {comments?.data?.map((comment) => (
           <div className={cls.comment}>
              <Comment comment={comment} />
              <div className={cls.answers__wrapper}>
                 {comment.answers.map((answer) => (
                    <AnswerComment answerComment={answer} />
                 ))}
              </div>
           </div>
        ))}
     </div>
  );
};

export const CommentsList = React.memo(Component);
