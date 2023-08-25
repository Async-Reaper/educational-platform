import React, { useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { Button, ErrorText, Input } from 'shared/ui';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { addComment } from '../../model/api/addComment';
import { AddCommentType } from '../../model/types';
import { addCommentError } from '../../model/selectors';
import { addCommentReducer } from '../../model/slice/addCommentSlice';
import cls from './styles.module.scss';

interface Props {
   id: number;
   onSuccess: () => void;
}

const initialReducers: ReducersList = {
   addCommentForm: addCommentReducer,
};

const AddCommentForm = ({ id, onSuccess }: Props) => {
   const dispatch = useAppDispatch();
   const error = useSelector(addCommentError);

   const text = useInput('', { isEmpty: true });
   const personName = useInput('', { isEmpty: true });

   const addCommentData: AddCommentType = {
      idResource: id,
      text: text.value,
      person_name: personName.value,
   };

   const handleAddComment = useCallback(async () => {
      const response = await dispatch(addComment(addCommentData));

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [addCommentData, dispatch, onSuccess]);

   const validateAddComment = useCallback(() => {
      text.onBlur();
      personName.onBlur();
      if (
         !text.isEmpty
            && !personName.isEmpty
      ) {
         handleAddComment();
      }
   }, [text, personName, handleAddComment]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={cls.wrapper}>
            <div>
               <Input
                  type='text'
                  value={personName.value}
                  onChange={personName.onChange}
                  label='Ваше имя'
               />
               {(personName.isDirty && personName.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
            </div>

            <div>
               <Input
                  type='text'
                  value={text.value}
                  onChange={text.onChange}
                  label='Ваш комментарий'
               />
               {(text.isDirty && text.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
            </div>
            <Button full variant='xs' background='violet-primary' onClick={validateAddComment}>
               Оставить комментарий
            </Button>
            {
               error
                 && (
                    <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                 )
            }
         </div>
      </DynamicModuleLoader>
   );
};

export default AddCommentForm;
