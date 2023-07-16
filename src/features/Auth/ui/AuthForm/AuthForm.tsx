import React, { FormEvent, useCallback } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { useSelector } from 'react-redux';
import { AuthData } from '../../model/types';
import { authErrors } from '../../model/selectors';
import { auth } from '../../model/api/auth';
import { authReducer } from '../../model/slice/authSlice';
import cls from './styles.module.scss';

interface Props {
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  authForm: authReducer,
};

const Auth = ({ onSuccess }: Props) => {
  const dispatch = useAppDispatch();
  const error = useSelector(authErrors);

  const email = useInput('', { isEmpty: true, emailValid: true });
  const password = useInput('', { isEmpty: true });

  const authData: AuthData = {
    email: email.value,
    password: password.value,
  };

  const handleAuth = useCallback(async () => {
    const response = await dispatch(auth(authData));

    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [authData, dispatch, onSuccess]);

  const validateDataAuth = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.onBlur();
    password.onBlur();
    if (
      !email.emailValid
          && !email.isEmpty
          && !password.isEmpty
    ) {
      handleAuth();
    }
  }, [email, password, handleAuth]);

  return (
     <DynamicModuleLoader
       reducers={initialReducers}
       removeAfterUnmount
     >
        <form className={cls.auth__wrapper} onSubmit={(e) => validateDataAuth(e)}>
           <div>
              <Input
                type='email'
                value={email.value}
                onChange={email.onChange}
                label='Почта'
              />
              {(email.isDirty && email.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
              {(email.isDirty && email.emailValid) && <ErrorText>Некорректный адрес</ErrorText>}
           </div>

           <div>
              <Input
                type='password'
                value={password.value}
                onChange={password.onChange}
                label='Пароль'
              />
              {(password.isDirty && password.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
           </div>

           <Button full variant='xs' background='violet-primary'>
              Вход
           </Button>
           {
                 error
                 && (
                 <ErrorText>Неправильный логин или пароль</ErrorText>
                 )
             }
        </form>
     </DynamicModuleLoader>
  );
};

export default Auth;
