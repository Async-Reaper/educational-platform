import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Typography } from 'shared/ui';
import { getAllComments } from 'entities/Comments';
import { addCommentIsLoading, addCommentIsSuccess } from 'features/AddComment';
import { addAnswerCommentIsLoading } from 'features/AddAnswerComment';
import { useSelector } from 'react-redux';
import { commentsData } from 'entities/Comments/model/selectors';
import { AnswerComment } from './AnswerComment/AnswerComment';
import { Comment } from './Comment/Comment';
import cls from './styles.module.scss';

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const statusAddCommentIsLoading = useSelector(addCommentIsLoading);
  const statusAddCommentIsSuccess = useSelector(addCommentIsSuccess);
  const statusAddAnswerComment = useSelector(addAnswerCommentIsLoading);

  const comments = useSelector(commentsData);

  const handleGetAllComment = useCallback(() => {
    dispatch(getAllComments(id));
  }, [dispatch, id]);

  useEffect(() => {
    handleGetAllComment();
  }, [statusAddCommentIsLoading, statusAddCommentIsSuccess, statusAddAnswerComment]);

  return (
     <div className={cls.comments__wrapper}>
        {comments?.length !== 0 && (
        <div className={cls.comments__title}>
           <Typography variant='body' color='violet-primary' tag='strong'>Комментарии</Typography>
        </div>
        )}
        {comments?.map((comment) => (
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
