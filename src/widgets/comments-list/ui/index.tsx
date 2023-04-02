import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { Avatar, ModalWindow, Typography } from 'shared/ui';
import { AnswerComment } from 'features/answer-comment/ui';
// @ts-ignore
import dateFormat from 'dateformat';
import { CommentType } from 'widgets/comments-list';
import { getAllComments } from 'widgets/comments-list/model/api';
import cls from './styles.module.scss';
import ava from '../../../entities/user/img/ava.png';

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  // const commentsList = getAllCommentsSelector();
  const dispatch = useAppDispatch();

  const [commentsList, setCommentsList] = useState<CommentType[]>([]);

  // const dateReg: string = dateFormat(data?.registration_date, 'isoDateTime').replace(/T/, ' ');

  useEffect(() => {
    dispatch(getAllComments(id, setCommentsList));
  }, []);

  const [isVisibleAnswer, setIsVisibleAnswer] = useState(false);

  return (
     <div className={cls.comments__wrapper}>
        {commentsList.length !== 0 && (
        <div className={cls.comments__title}>
           <Typography variant='h3' color='violet-primary'>Комментарии</Typography>
        </div>
        )}
        {commentsList.map((comment) => (
           <div className={cls.comment}>
              <div className={cls.comment_item__wrapper}>
                 <div className={cls.comment__header}>
                    <div>
                       <Typography color='black-bg' tag='span'>{comment.person_name}</Typography>
                       <Typography color='black-light'>{comment.text}</Typography>
                    </div>
                    <div>
                       <Typography variant='small'>
                          {dateFormat(comment.creation_date, 'isoDateTime').replace(/T/, ' ').slice(0, comment?.creation_date?.length - 8)}
                       </Typography>
                    </div>
                 </div>
                 {
                  localStorage.getItem('token')
                    && (
                    <div className={cls.answer__btn} onClick={() => setIsVisibleAnswer(true)}>
                       <Typography variant='body'>Ответить</Typography>
                    </div>
                    )
                }
                 <div>
                    <ModalWindow isVisible={isVisibleAnswer} setIsVisible={setIsVisibleAnswer}>
                       <AnswerComment id={comment.id} setVisible={setIsVisibleAnswer} />
                    </ModalWindow>
                 </div>
                 <div className={cls.comment__content} />
              </div>
              <div className={cls.answers__wrapper}>
                 {comment.answers.map((answer) => (
                    <div className={cls.answer__wrapper}>
                       <div className={cls.answer__header}>
                          <Avatar variant='xs' src={answer.teacher.icon || ava} />
                          <div>
                             <Typography color='black-bg' tag='span'>{answer.teacher.full_name}</Typography>
                             <Typography color='black-light'>{answer.text}</Typography>
                          </div>
                       </div>
                       <div>
                          <Typography variant='small'>
                             {dateFormat(answer.creation_date, 'isoDateTime').replace(/T/, ' ').slice(0, answer?.creation_date?.length - 8)}
                          </Typography>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        ))}
     </div>
  );
};

export const CommentsList = React.memo(Component);
