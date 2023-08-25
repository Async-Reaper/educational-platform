import React, { useCallback } from 'react';
import { Button, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { logout } from '../../model/api/logout';
import { logoutReducer } from '../../model/slice/logoutSlice';
import cls from './styles.module.scss';

interface Props {
   onSuccess: () => void;
}

const initialReducers: ReducersList = {
   logoutForm: logoutReducer,
};

const LogoutForm = ({ onSuccess }: Props) => {
   const dispatch = useAppDispatch();

   const handleLogout = useCallback(async () => {
      const response = await dispatch(logout());

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [dispatch, onSuccess]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={cls.logout__modal}>
            <div className={cls.logout__text}>
               <Typography>
                  Вы действительно хотите выйти?
               </Typography>
            </div>
            <div className={cls.logout__buttons}>
               <Button variant='xs' border onClick={handleLogout}>
                  Да
               </Button>
               <Button variant='xs' onClick={onSuccess}>
                  Нет
               </Button>
            </div>
         </div>
      </DynamicModuleLoader>
   );
};

export default LogoutForm;
