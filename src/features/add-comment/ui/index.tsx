import React, { useEffect } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useInput } from 'shared/libs/hooks/useValidation/useInput';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { getStatusRequest } from 'shared/libs/selectors';
import { AddCommentType } from 'features/add-comment/model/types';
import { addComment } from 'features/add-comment/model/api';
import cls from './styles.module.scss';

interface Props {
  id: number;
  setVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const dispatch = useAppDispatch();
  const { success, error } = getStatusRequest();
  const text = useInput('', { isEmpty: true });
  const personName = useInput('', { isEmpty: true });

  const addCommentData: AddCommentType = {
    text: text.value,
    person_name: personName.value,
  };

  const handleAuth = () => {
    text.onBlur();
    personName.onBlur();
    if (
      !text.isEmpty
          && !personName.isEmpty
    ) {
      dispatch(addComment(addCommentData, id));
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
             type='text'
             value={personName.value}
             onChange={personName.onChange}
             label='Ваше имя'
           />
           {(personName.isDirty && personName.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>

        <div>
           <Input
             type='text'
             value={text.value}
             onChange={text.onChange}
             label='Ваш комментарий'
           />
           {(text.isDirty && text.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>
        <Button full variant='xs' background='violet-primary' onClick={handleAuth}>
           Вход
        </Button>
        {
             error
                 && (
                 <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                 )
         }
     </div>
  );
};

export const AddComment = React.memo(Component);
