import React, { useEffect } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { AuthData } from 'features/auth/model/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { auth } from 'features/auth/model/api';
import { getStatusRequest } from 'shared/libs/selectors';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  const { success, error } = getStatusRequest();
  const email = useInput('', { isEmpty: true, emailValid: true });
  const password = useInput('', { isEmpty: true });

  const authData: AuthData = {
    email: email.value,
    password: password.value,
  };

  const handleAuth = () => {
    email.onBlur();
    password.onBlur();
    if (
      !email.emailValid
          && !email.isEmpty
          && !password.isEmpty
    ) {
      dispatch(auth(authData));
    }
  };

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [success]);

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

        <Button full variant='xs' background='violet-primary' onClick={handleAuth}>
           Вход
        </Button>
        {
             error
                 && (
                 <ErrorText>Неправильный логин или пароль</ErrorText>
                 )
         }
     </div>
  );
};

export const Auth = React.memo(Component);
