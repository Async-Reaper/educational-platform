import React, { useState } from 'react';
import {
  Button, ErrorText, Input, Typography,
} from 'shared/ui';
import { useInput } from 'shared/libs/hooks/useValidation/useInput';
import { AuthData } from 'features/auth/model/types';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { auth } from 'features/auth/model/api';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const [res, setRes] = useState<any>({});
  const dispatch = useAppDispatch();
  const email = useInput('', { isEmpty: true, emailValid: true });
  const password = useInput('', { isEmpty: true });

  const authData: AuthData = {
    email: email.value,
    password: password.value,
  };

  const handleAuth = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    // e.preventDefault();
    email.onBlur();
    password.onBlur();
    if (
      !email.emailValid
          && !password.passwordValid
          && !password.isEmpty
    ) {
      dispatch(auth(authData));
    }
    if (res.message !== undefined) {
      if (setVisible) {
        setVisible(false);
      }
    } else if (setVisible) {
      setVisible(true);
    }
  };

  return (
     <div className={cls.auth__wrapper}>
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

        <Button full variant='xs' background='violet-primary' onClick={(e) => handleAuth(e)}>
           Вход
        </Button>

        {
        res.message !== undefined
        && (
        <div className={cls.auth__error}>
           <Typography>
              {res.message}
           </Typography>
        </div>
        )
    }
     </div>
  );
};

export const Auth = React.memo(Component);
