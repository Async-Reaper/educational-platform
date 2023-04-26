import React, { useEffect } from 'react';
import {
  Button, ErrorText, Input, TextArea, Typography,
} from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { AskQuestionType } from 'features/ask-questions/model/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getStatusRequest } from 'shared/libs/selectors';
import { fetchAskQuestions } from 'features/ask-questions/model/api/askQuestions';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const email = useInput('', { isEmpty: true, emailValid: true });
  const name = useInput('', { isEmpty: true });
  const question = useInput('', { isEmpty: true });

  const { success } = getStatusRequest();
  const dispatch = useAppDispatch();

  const dataAskQuestions: AskQuestionType = {
    person_email: email.value,
    person_name: name.value,
    person_question: question.value,
  };

  const handleAskQuestions = () => {
    email.onBlur();
    name.onBlur();
    question.onBlur();
    if (
      !email.emailValid
            && !email.isEmpty
            && !name.isEmpty
            && !question.isEmpty
    ) {
      dispatch(fetchAskQuestions(dataAskQuestions));
    }
  };

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [success]);

  return (
     <div className={cls.auth__wrapper}>
        <Input value={email.value} onChange={email.onChange} placeholder='Ваша почта' />
        {(email.isDirty && email.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        {(email.isDirty && email.emailValid) && <ErrorText>Некорректный адрес</ErrorText>}

        <Input value={name.value} onChange={name.onChange} placeholder='Ваше имя' />
        {(name.isDirty && name.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}

        <TextArea value={question.value} onChange={question.onChange} placeholder='Задайте вопросы, которые у вас возникли' />
        {(question.isDirty && question.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}

        <Button variant='xs' background='violet-primary' onClick={handleAskQuestions}>
           <Typography variant='h3'>Задать вопрос</Typography>
        </Button>
     </div>
  );
};

export const AskQuestions = React.memo(Component);
