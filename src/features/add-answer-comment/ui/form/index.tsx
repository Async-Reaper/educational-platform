import React, { useEffect } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getStatusRequest } from 'shared/libs/selectors';
import { fetchAnswerComment } from 'features/add-answer-comment/model/api';
import { AnswerCommentType } from 'features/add-answer-comment/model/types';
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
    id,
    text: text.value,
  };

  const handleAuth = () => {
    text.onBlur();
    if (
      !text.isEmpty
    ) {
      dispatch(fetchAnswerComment(answerCommentData));
    }
  };

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [success]);

  return (
     <form className={cls.auth__wrapper}>
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
     </form>
  );
};

export const AddAnswerComment = React.memo(Component);
