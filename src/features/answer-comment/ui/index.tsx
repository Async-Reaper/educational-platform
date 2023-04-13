import React, { useEffect, useState } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getStatusRequest } from 'shared/libs/selectors';
import { answerComment } from 'features/answer-comment/model/api';
import { AnswerCommentType } from 'features/answer-comment/model/types';
import { CommentType } from 'widgets/comments-list';
import { getAllComments } from 'widgets/comments-list/model/api';
import cls from './styles.module.scss';

interface Props {
  id: number;
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const dispatch = useAppDispatch();
  const { success, error } = getStatusRequest();
  const text = useInput('', { isEmpty: true });
  const answerCommentData: AnswerCommentType = {
    text: text.value,
  };

  const handleAuth = () => {
    text.onBlur();
    if (
      !text.isEmpty
    ) {
      dispatch(answerComment(answerCommentData, id));
    }
  };

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [success]);

  return (
     <div className={cls.auth__wrapper}>
        <div>
           <Input
             type='text'
             value={text.value}
             onChange={text.onChange}
             label='Ваш ответ'
           />
           {(text.isDirty && text.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>

        <Button full variant='xs' background='violet-primary' onClick={handleAuth}>
           Ответить
        </Button>
        {
             error
                 && (
                 <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                 )
         }
     </div>
  );
};

export const AnswerComment = React.memo(Component);
