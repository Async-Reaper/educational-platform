import React, { useCallback } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { addLinkErrors } from '../../model/selectors';
import { addLink } from '../../model/api/addLink';
import { AddLinkType } from '../../model/types';
import { addLinkReducer } from '../../model/slice/addLinkSlice';
import cls from './styles.module.scss';

interface Props {
   id: number | undefined
   onSuccess: () => void;
}

const initialReducers: ReducersList = {
   addLinkForm: addLinkReducer,
};

const AddLinkForm = ({ id, onSuccess }: Props) => {
   const error = useSelector(addLinkErrors);

   const dispatch = useAppDispatch();
   const link = useInput('', { isEmpty: true });
   const description = useInput('', { isEmpty: true });

   const dataAddLink: AddLinkType = {
      id,
      link: link.value,
      description: description.value,
   };

   const handleChangeEmail = useCallback(async () => {
      const response = await dispatch(addLink(dataAddLink));

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [dataAddLink, onSuccess, dispatch]);

   const validateDataChangeEmail = useCallback(() => {
      link.onBlur();
      description.onBlur();
      if (!link.isEmpty
          && !description.isEmpty
      ) {
         handleChangeEmail();
      }
   }, [handleChangeEmail, link, description]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={cls.wrapper}>
            <div>
               <Input
                  type='text'
                  value={link.value}
                  onChange={link.onChange}
                  label='Ссылка на тренажер'
               />
               {(link.isDirty && link.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
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
            <Button full variant='xs' background='violet-primary' onClick={validateDataChangeEmail}>
               Добавить тренажер
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

export default AddLinkForm;
