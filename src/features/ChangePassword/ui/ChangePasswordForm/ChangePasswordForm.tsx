import React, { FormEvent, useCallback } from 'react';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Button, ErrorText, Input } from 'shared/ui';
import { useSelector } from 'react-redux';
import { changePasswordErrors } from '../../model/selectors';
import { ChangePasswordType } from '../../model/types';
import { changePassword } from '../../model/api/changePassword';
import cls from './styles.module.scss';

interface Props {
   onSuccess: () => void;
}

const ChangePasswordForm = ({ onSuccess }: Props) => {
   const password = useInput('', { isEmpty: true, emailValid: true });
   const newPassword = useInput('', { isEmpty: true, passwordValid: true });
   const repeatNewPassword = useInput('', { isEmpty: true });

   const dispatch = useAppDispatch();
   const error = useSelector(changePasswordErrors);

   const changePasswordData: ChangePasswordType = {
      old_password: password.value,
      new_password: newPassword.value,
      new_password2: repeatNewPassword.value,
   };

   const handleChangePassword = useCallback(async () => {
      const response = await dispatch(changePassword(changePasswordData));

      if (response.meta.requestStatus === 'fulfilled') {
         onSuccess();
      }
   }, [changePasswordData, dispatch, onSuccess]);

   const validateDataChangePassword = useCallback((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      password.onBlur();
      newPassword.onBlur();
      repeatNewPassword.onBlur();
      if (
         !newPassword.isEmpty
          && !repeatNewPassword.isEmpty
          && !password.isEmpty
      ) {
         handleChangePassword();
      }
   }, [password, newPassword, repeatNewPassword, handleChangePassword]);

   return (
      <form className={cls.change_password__wrapper} onSubmit={(e) => validateDataChangePassword(e)}>
         <div>
            <Input
               type='password'
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
            {(repeatNewPassword.isDirty && repeatNewPassword.isEmpty)
               && <ErrorText>Поле не должно быть пустым</ErrorText>}
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

export default ChangePasswordForm;
