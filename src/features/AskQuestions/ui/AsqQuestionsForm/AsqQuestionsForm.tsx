import React, { useCallback } from 'react';
import {
   Button, ErrorText, Input, TextArea, Typography,
} from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { AskQuestionType } from '../../model/types';
import { askQuestions } from '../../model/api/askQuestions';
import { askQuestionsReducer } from '../../model/slice/askQuestionsSlice';
import cls from './styles.module.scss';

interface Props {
   onSuccess: () => void;
}

const initialReducer: ReducersList = {
   askQuestionsForm: askQuestionsReducer,
};

const AskQuestions = ({ onSuccess }: Props) => {
   const email = useInput('', { isEmpty: true, emailValid: true });
   const name = useInput('', { isEmpty: true });
   const question = useInput('', { isEmpty: true });

   const dispatch = useAppDispatch();

   const dataAskQuestions: AskQuestionType = {
      person_email: email.value,
      person_name: name.value,
      person_question: question.value,
   };

   const handleAskQuestions = useCallback(async () => {
      const response = await dispatch(askQuestions(dataAskQuestions));

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [dataAskQuestions, dispatch, onSuccess]);

   const validateAskQuestionsData = useCallback(() => {
      email.onBlur();
      name.onBlur();
      question.onBlur();
      if (
         !email.emailValid
          && !email.isEmpty
          && !name.isEmpty
          && !question.isEmpty
      ) {
         handleAskQuestions();
      }
   }, [email, name, question, handleAskQuestions]);

   return (
      <DynamicModuleLoader
         reducers={initialReducer}
         removeAfterUnmount
      >
         <div className={cls.wrapper}>
            <Input value={email.value} onChange={email.onChange} placeholder='Ваша почта' />
            {(email.isDirty && email.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
            {(email.isDirty && email.emailValid) && <ErrorText>Некорректный адрес</ErrorText>}

            <Input value={name.value} onChange={name.onChange} placeholder='Ваше имя' />
            {(name.isDirty && name.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}

            <TextArea
               value={question.value}
               onChange={question.onChange}
               placeholder='Задайте вопросы, которые у вас возникли'
            />
            {(question.isDirty && question.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}

            <Button variant='xs' background='violet-primary' onClick={validateAskQuestionsData}>
               <Typography variant='h3'>Задать вопрос</Typography>
            </Button>
         </div>
      </DynamicModuleLoader>
   );
};

export default AskQuestions;
