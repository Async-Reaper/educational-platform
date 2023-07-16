import React, { useCallback } from 'react';
import { Button, ErrorText, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { deleteResourceReducer } from '../../model/slice/deleteReducerSlice';
import { deleteResourceErrors } from '../../model/selectors';
import { deleteResource } from '../../model/api/deleteResource';
import cls from './styles.module.scss';

interface Props {
  id: number
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  deleteResourceForm: deleteResourceReducer,
};

const DeleteResource = ({ id, onSuccess }: Props) => {
  const error = useSelector(deleteResourceErrors);
  const dispatch = useAppDispatch();

  const handleDeleteResource = useCallback(async () => {
    const response = await dispatch(deleteResource(id));

    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess]);

  return (
     <DynamicModuleLoader
       reducers={initialReducers}
       removeAfterUnmount
     >
        <div className={cls.wrapper}>
           <Typography tag='span' variant='small' color='violet-primary'>
              Вы действительно хотите удалить данный ресурс?
           </Typography>
           <div className={cls.buttons__wrapper}>
              <Button full variant='xs' background='violet-primary' onClick={handleDeleteResource}>
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

export default DeleteResource;
