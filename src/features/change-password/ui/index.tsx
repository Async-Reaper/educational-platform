import React, {FormEvent, useEffect} from 'react';
import { getStatusRequest } from 'shared/libs/selectors';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { ChangePasswordType } from 'features/change-password/model/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { fetchChangePassword } from 'features/change-password/model/api/changePassword';
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

  const handleChangePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    password.onBlur();
    newPassword.onBlur();
    repeatNewPassword.onBlur();
    if (
      !newPassword.isEmpty
            && !repeatNewPassword.isEmpty
            && !password.isEmpty
    ) {
      dispatch(fetchChangePassword(changePasswordData));
    }
  };

  return (
     <form className={cls.change_password__wrapper} onSubmit={(e) => handleChangePassword(e)}>
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

        <Button full variant='xs' background='violet-primary'>
           Сменить пароль
        </Button>
        {
              error
              && (
              <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
              )
          }
     </form>
  );
};

export const ChangePassword = React.memo(Component);
