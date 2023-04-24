import React, { type FC, useState } from 'react';
import { Typography } from 'shared/ui';
import { getCookie } from 'shared/libs/cookie';
import { CommentType } from 'widgets/comments-list';
// @ts-ignore
import dateFormat from 'dateformat';
import { ModalAnswerComment } from 'features';
import cls from './styles.module.scss';

interface Props {
  comment: CommentType;
}

const Component: FC<Props> = ({ comment }) => {
  const [isVisibleAnswer, setIsVisibleAnswer] = useState(false);
  return (
     <div className={cls.comment__wrapper}>
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
           <ModalAnswerComment commentId={comment.id} isVisible={isVisibleAnswer} setIsVisible={setIsVisibleAnswer} />
        </div>
     </div>
  );
};

export const Comment = React.memo(Component);
