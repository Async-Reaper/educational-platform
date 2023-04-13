import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Avatar, ModalWindow, Typography } from 'shared/ui';
import { AnswerComment } from 'features/answer-comment/ui';
// @ts-ignore
import dateFormat from 'dateformat';
import { CommentType } from 'widgets/comments-list';
import { getAllComments } from 'widgets/comments-list/model/api';
import { API_URL } from 'shared/constants/baseURL';
import cls from './styles.module.scss';
import ava from '../../../entities/user/img/ava.png';
import { getCookie } from '../../../shared/libs/cookie';

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    dispatch(getAllComments(id, setComments));
  }, [dispatch, id]);

  const [isVisibleAnswer, setIsVisibleAnswer] = useState(false);

  return (
     <div className={cls.comments__wrapper}>
        {comments.length !== 0 && (
        <div className={cls.comments__title}>
           <Typography variant='body' color='violet-primary' tag='strong'>Комментарии</Typography>
        </div>
        )}
        {comments.map((comment) => (
           <div className={cls.comment}>
              <div className={cls.comment_item__wrapper}>
                 <div className={cls.comment__header}>
                    <div>
                       <Typography
                         color='black-bg'
                         variant='body'
                         tag='span'
                       >
                          {comment.person_name}
                       </Typography>
                       <Typography color='black-light' variant='body'>{comment.text}</Typography>
                    </div>
                    <div>
                       <Typography tag='span' variant='small' color='violet-primary'>
                          {/* eslint-disable-next-line max-len,no-unsafe-optional-chaining */}
                          {dateFormat(comment.creation_date, 'isoDateTime').replace(/T/, ' ').slice(0, comment?.creation_date?.length - 8)}
                       </Typography>
                    </div>
                 </div>
                 {
                            getCookie('is_teacher') === 'true'
                            && (
                            <div className={cls.answer__btn} onClick={() => setIsVisibleAnswer(true)}>
                               <Typography tag='span' variant='small' color='black-dark'>Ответить</Typography>
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
                          <Avatar
                            variant='xs'
                            src={answer.teacher.icon
                              ? `${API_URL}${answer.teacher.icon}`
                              : ava}
                          />
                          <div>
                             <Typography
                               color='black-bg'
                               variant='body'
                               tag='span'
                             >
                                {answer.teacher.full_name}
                             </Typography>
                             <Typography color='black-light' variant='body'>{answer.text}</Typography>
                             <Typography tag='span' variant='small' color='violet-primary'>
                                {/* eslint-disable-next-line max-len,no-unsafe-optional-chaining */}
                                {dateFormat(answer.creation_date, 'isoDateTime').replace(/T/, ' ').slice(0, answer?.creation_date?.length - 8)}
                             </Typography>
                          </div>
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
