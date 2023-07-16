import React, { FormEvent, useCallback } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { useSelector } from 'react-redux';
import { changeEmailErrors } from 'features/ChangeEmail';
import { ChangeEmailType } from '../../model/types';
import { changeEmail } from '../../model/api/changeEmail';
import { changeEmailReducer } from '../../model/slice/changeEmailSlice';
import cls from './styles.module.scss';

interface Props {
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  changeEmailForm: changeEmailReducer,
};

const ChangeEmail = ({ onSuccess }: Props) => {
  const error = useSelector(changeEmailErrors);
  const dispatch = useAppDispatch();
  const email = useInput('', { isEmpty: true, emailValid: true });

  const changeEmailData: ChangeEmailType = {
    new_user_email: email.value,
  };

  const handleChangeEmail = useCallback(async () => {
    const response = await dispatch(changeEmail(changeEmailData));

    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [changeEmailData, dispatch, onSuccess]);

  const validateDataChangeEmail = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.onBlur();
    if (
      !email.emailValid
          && !email.isEmpty
    ) {
      handleChangeEmail();
    }
  }, [email, handleChangeEmail]);

  return (
     <DynamicModuleLoader
       reducers={initialReducers}
       removeAfterUnmount
     >
        <form className={cls.wrapper} onSubmit={(e) => validateDataChangeEmail(e)}>
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
                 error
                 && (
                 <ErrorText>{error}</ErrorText>
                 )
             }
        </form>
     </DynamicModuleLoader>
  );
};

export default ChangeEmail;
