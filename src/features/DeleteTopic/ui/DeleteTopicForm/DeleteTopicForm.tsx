import React, { useCallback } from 'react';
import { Button, ErrorText, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { deleteTopicErrors } from '../../model/selectors';
import { deleteTopic } from '../../model/api/deleteTopic';
import { deleteTopicReducer } from '../../model/slice/deleteTopicSlice';
import cls from './styles.module.scss';

interface Props {
   idTopic: number | undefined;
   onSuccess: () => void;
}

const initialReducers: ReducersList = {
   deleteTopicForm: deleteTopicReducer,
};

const DeleteTopicForm: React.FC<Props> = ({ idTopic, onSuccess }) => {
   const dispatch = useAppDispatch();

   const error = useSelector(deleteTopicErrors);

   const handleDeleteTopic = useCallback(async () => {
      const response = await dispatch(deleteTopic(idTopic));

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [dispatch, onSuccess]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={cls.delete_topic__wrapper}>
            <Typography tag='span' variant='small' color='violet-primary'>
               Вы действительно хотите удалить данную тему?
            </Typography>
            <div className={cls.buttons__wrapper}>
               <Button full variant='xs' background='violet-primary' onClick={handleDeleteTopic}>
                  Да
               </Button>
               <Button full variant='xs' background='violet-primary' onClick={onSuccess}>
                  Нет
               </Button>
            </div>
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

export default DeleteTopicForm;
