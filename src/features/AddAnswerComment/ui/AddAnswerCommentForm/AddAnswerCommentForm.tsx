import React, { useCallback } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { useSelector } from 'react-redux';
import { addAnswerCommentError } from '../../model/selectors';
import { addAnswerComment } from '../../model/api/addAnswerComment';
import { AnswerCommentType } from '../../model/types';
import { addAnswerCommentReducer } from '../../model/slice/addAnswerCommentSlice';
import cls from './styles.module.scss';

interface Props {
  id: number;
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  addAnswerCommentForm: addAnswerCommentReducer,
};

const AddAnswerComment: React.FC<Props> = ({ onSuccess, id }) => {
  const dispatch = useAppDispatch();
  const errors = useSelector(addAnswerCommentError);

  const text = useInput('', { isEmpty: true });

  const answerCommentData: AnswerCommentType = {
    id,
    text: text.value,
  };

  const handleAnswerComment = useCallback(async () => {
    const response = await dispatch(addAnswerComment(answerCommentData));

    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [answerCommentData, dispatch, onSuccess]);

  const validateDataAnswerComment = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    text.onBlur();
    if (
      !text.isEmpty
    ) {
      handleAnswerComment();
    }
  }, [text, handleAnswerComment]);

  return (
     <DynamicModuleLoader
       reducers={initialReducers}
       removeAfterUnmount
     >
        <form className={cls.auth__wrapper} onSubmit={(e) => validateDataAnswerComment(e)}>
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
               errors
                 && (
                 <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                 )
         }
        </form>
     </DynamicModuleLoader>
  );
};

export default AddAnswerComment;
