import React, {FormEvent, useEffect} from 'react';
import { getStatusRequest } from 'shared/libs/selectors';
import {
  Button, ErrorText, Input, Typography,
} from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { ChangeEmailType } from 'features/change-email/model/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { fetchChangeEmail } from 'features/change-email/model/api/changeEmail';
import { getStatusChangeEmailSelector } from 'features/change-email';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const statusChangeEmail = getStatusChangeEmailSelector();
  const dispatch = useAppDispatch();
  const email = useInput('', { isEmpty: true, emailValid: true });

  const changeEmailData: ChangeEmailType = {
    new_user_email: email.value,
  };

  useEffect(() => {
    if (setVisible) {
      statusChangeEmail.isSuccess && setVisible(false);
    }
  }, [statusChangeEmail.isSuccess, statusChangeEmail.error]);

  const handleChangeEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.onBlur();
    if (
      !email.emailValid
            && !email.isEmpty
    ) {
      dispatch(fetchChangeEmail(changeEmailData));
    }
  };

  return (
     <form className={cls.change_email__wrapper} onSubmit={(e) => handleChangeEmail(e)}>
        <div>
           <Input
             type='email'
             value={email.value}
             onChange={email.onChange}
             label='Новая почта'
           />
           {(email.isDirty && email.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
           {(email.isDirty && email.emailValid) && <ErrorText>Некорректный адрес</ErrorText>}
        </div>

        <Button full variant='xs' background='violet-primary'>
           Сменить почту
        </Button>
        {
            statusChangeEmail.error
              && (
              <ErrorText>{statusChangeEmail.error}</ErrorText>
              )
          }
     </form>
  );
};

export const ChangeEmail = React.memo(Component);
