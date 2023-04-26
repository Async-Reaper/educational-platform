import React, { useEffect } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { fetchAnswerComment } from 'features/add-answer-comment/model/api';
import { AnswerCommentType } from 'features/add-answer-comment/model/types';
import { getStatusAddAnswerSelector } from 'features/add-answer-comment';
import cls from './styles.module.scss';

interface Props {
  id: number;
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const dispatch = useAppDispatch();
  const statusAddAnswer = getStatusAddAnswerSelector();

  const text = useInput('', { isEmpty: true });
  const answerCommentData: AnswerCommentType = {
    id,
    text: text.value,
  };

  const handleAnswerComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    text.onBlur();
    if (
      !text.isEmpty
    ) {
      dispatch(fetchAnswerComment(answerCommentData));
    }
  };

  useEffect(() => {
    if (setVisible) {
      statusAddAnswer.isSuccess && setVisible(false);
    }
  }, [statusAddAnswer.isSuccess]);

  return (
     <form className={cls.auth__wrapper} onSubmit={(e) => handleAnswerComment(e)}>
        <div>
           <Input
             type='text'
             value={text.value}
             onChange={text.onChange}
             label='Ваш ответ'
           />
           {(text.isDirty && text.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>

        <Button full variant='xs' background='violet-primary'>
           Ответить
        </Button>
        {
            statusAddAnswer.error
                 && (
                 <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                 )
         }
     </form>
  );
};

export const AddAnswerComment = React.memo(Component);
