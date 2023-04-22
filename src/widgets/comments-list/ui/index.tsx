import React, { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Typography } from 'shared/ui';
import { getAllComments } from 'widgets/comments-list/model/api';
import { Comment } from 'widgets/comments-list/ui/comment';
import { AnswerComment } from 'widgets/comments-list/ui/answer-comment';
import { getAllCommentsSelector } from 'widgets/comments-list/model/selectors';
import cls from './styles.module.scss';

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const comments = getAllCommentsSelector();

  useEffect(() => {
    dispatch(getAllComments(id));
  }, [dispatch, id]);

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
