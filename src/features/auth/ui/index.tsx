import React, { FormEvent, useEffect } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { AuthData } from 'features/auth/model/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getStatusRequest } from 'shared/libs/selectors';
import { fetchAuthUser } from 'features/auth/model/api';
import { authSelector } from 'features/auth';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  const statusAuth = authSelector();
  const email = useInput('', { isEmpty: true, emailValid: true });
  const password = useInput('', { isEmpty: true });

  const authData: AuthData = {
    email: email.value,
    password: password.value,
  };

  const handleAuth = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.onBlur();
    password.onBlur();
    if (
      !email.emailValid
          && !email.isEmpty
          && !password.isEmpty
    ) {
      dispatch(fetchAuthUser(authData));
    }
  };

  useEffect(() => {
    if (setVisible) {
      statusAuth.isSuccess && setVisible(false);
    }
  }, [statusAuth.isSuccess]);

  return (
     <form className={cls.auth__wrapper} onSubmit={(e) => handleAuth(e)}>
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
             statusAuth.error
                 && (
                 <ErrorText>Неправильный логин или пароль</ErrorText>
                 )
         }
     </form>
  );
};

export const Auth = React.memo(Component);
