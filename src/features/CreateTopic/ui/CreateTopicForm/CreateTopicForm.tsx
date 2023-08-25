import React, { useCallback } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { CreateTopicType } from '../../model/types';
import { createTopic } from '../../model/api/createTopic';
import { createTopicErrors } from '../../model/selectors';
import { createTopicReducer } from '../../model/slice/createTopicSlice';
import cls from './styles.module.scss';

interface Props {
   id: number | undefined
   onSuccess: () => void;
}

const initialReducers: ReducersList = {
   createTopicForm: createTopicReducer,
};

const CreateTopicForm: React.FC<Props> = ({ id, onSuccess }) => {
   const dispatch = useAppDispatch();
   const name = useInput('', { isEmpty: true });
   const description = useInput('', { isEmpty: true });

   const error = useSelector(createTopicErrors);

   const dataCreateTopic: CreateTopicType = {
      id,
      name: name.value,
      description: description.value,
   };

   const handleChangeEmail = useCallback(async () => {
      const response = await dispatch(createTopic(dataCreateTopic));

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [dataCreateTopic, dispatch, onSuccess]);

   const validateChangeEmail = useCallback(() => {
      name.onBlur();
      description.onBlur();
      if (!name.isEmpty
          && !description.isEmpty
      ) {
         handleChangeEmail();
      }
   }, [name, description, handleChangeEmail]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={cls.wrapper}>
            <div>
               <Input
                  type='text'
                  value={name.value}
                  onChange={name.onChange}
                  label='Название темы'
               />
               {(name.isDirty && name.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
            </div>
            <div>
               <Input
                  type='text'
                  value={description.value}
                  onChange={description.onChange}
                  label='Описание'
               />
               {(description.isDirty && description.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
            </div>
            <Button full variant='xs' background='violet-primary' onClick={validateChangeEmail}>
               Создать тему
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

export default CreateTopicForm;
