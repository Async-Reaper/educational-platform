import React, { type FC } from 'react';
import { Avatar, Typography } from 'shared/ui';
// @ts-ignore
import dateFormat from 'dateformat';
import { AnswerType } from 'entities/Comments/model/types';
import cls from './styles.module.scss';
import ava from '../../../../../public/images/mock/ava.png';

interface Props {
  answerComment: AnswerType;
}

const Component: FC<Props> = ({ answerComment }) => (
   <div className={cls.answer__wrapper}>
      <div className={cls.answer__header}>
         <Avatar
           variant='xs'
           src={answerComment.teacher.icon
             ? `${__API__}${answerComment.teacher.icon}`
             : ava}
         />
         <div>
            <Typography
              color='black-bg'
              variant='body'
              tag='span'
            >
               {answerComment.teacher.full_name}
            </Typography>
            <Typography color='black-light' variant='body'>{answerComment.text}</Typography>
            <Typography tag='span' variant='small' color='violet-primary'>
               {dateFormat(answerComment.creation_date, 'isoDateTime')
                 .replace(/T/, ' ')
               // eslint-disable-next-line no-unsafe-optional-chaining
                 .slice(0, answerComment?.creation_date?.length - 8)}
            </Typography>
         </div>
      </div>
   </div>
);

export const AnswerComment = React.memo(Component);
