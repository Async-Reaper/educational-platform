import React, { useEffect } from 'react';
import { getStatusRequest } from 'shared/libs/selectors';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/libs/hooks/useValidation/useInput';
import { ChangePasswordType } from 'features/change-password/model/types';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { changePassword } from 'features/change-password/model/api';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const { success, error } = getStatusRequest();

  const password = useInput('', { isEmpty: true, emailValid: true });
  const newPassword = useInput('', { isEmpty: true, passwordValid: true });
  const repeatNewPassword = useInput('', { isEmpty: true });

  const dispatch = useAppDispatch();

  const changePasswordData: ChangePasswordType = {
    old_password: password.value,
    new_password: newPassword.value,
    new_password2: repeatNewPassword.value,
  };

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [success]);

  const handleChangePassword = () => {
    password.onBlur();
    newPassword.onBlur();
    repeatNewPassword.onBlur();
    if (
      !newPassword.emailValid
            && !newPassword.isEmpty
            && !repeatNewPassword.isEmpty
            && !password.isEmpty
    ) {
      dispatch(changePassword(changePasswordData));
    }
  };

  return (
     <div className={cls.change_password__wrapper}>
        <div>
           <Input
             type='email'
             value={password.value}
             onChange={password.onChange}
             label='Старый пароль'
           />
           {(password.isDirty && password.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
           <Input
             type='password'
             value={newPassword.value}
             onChange={newPassword.onChange}
             label='Новый пароль'
           />
           {(newPassword.isDirty && newPassword.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
           <Input
             type='password'
             value={repeatNewPassword.value}
             onChange={repeatNewPassword.onChange}
             label='Повторите новый пароль'
           />
           {(repeatNewPassword.isDirty && repeatNewPassword.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>

        <Button full variant='xs' background='violet-primary' onClick={handleChangePassword}>
           Сменить пароль
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

export const ChangePassword = React.memo(Component);
