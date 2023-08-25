import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { getCookie } from 'shared/libs/cookie';
// @ts-ignore
import dateFormat from 'dateformat';
import { CommentType } from 'entities/Comments/model/types';
import { useModal } from 'shared/hooks/useModal/useModal';
import { AddAnswerCommentModal } from 'features/AddAnswerComment';
import cls from './styles.module.scss';

interface Props {
   comment: CommentType;
}

const Component: FC<Props> = ({ comment }) => {
   const { isOpen, open, close } = useModal();

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
               <Typography tag='span' variant='body' color='violet-primary'>
                  {/* eslint-disable-next-line max-len,no-unsafe-optional-chaining */}
                  {dateFormat(comment.creation_date, 'isoDateTime').replace(/T/, ' ').slice(0, comment?.creation_date?.length - 8)}
               </Typography>
            </div>
         </div>
         {
            getCookie('is_teacher') === 'true'
                && (
                   <div className={cls.answer__btn} onClick={open}>
                      <Typography tag='span' variant='body' color='black-dark'>Ответить</Typography>
                   </div>
                )
         }
         {
            isOpen
                 && (
                    <AddAnswerCommentModal
                       commentId={comment.id}
                       isOpen={isOpen}
                       onClose={close}
                    />
                 )
         }
      </div>
   );
};

export const Comment = React.memo(Component);
