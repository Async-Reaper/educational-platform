import React, { useEffect } from 'react';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { getAllCommentsSelector } from 'widgets/comments-list/model/selector';
import { getAllComments } from 'widgets/comments-list/model/api';
import { Avatar, Typography } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  const commentsList = getAllCommentsSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllComments(id));
  }, []);

  return (
     <div className={cls.courses__wrapper}>
        {commentsList.data?.map((comment) => (
           <div>
              {comment.person_name}
              {comment.text}

           </div>
        ))}
     </div>
  );
};

export const CommentsList = React.memo(Component);
