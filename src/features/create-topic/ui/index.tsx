import React, { useEffect } from 'react';
import cls from 'features/change-email/ui/styles.module.scss';
import { Button, ErrorText, Input } from 'shared/ui';
import { getStatusRequest } from 'shared/libs/selectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { createTopic } from 'features/create-topic/model/api';
import { CreateTopicType } from 'features/create-topic/model/types';

interface Props {
  setVisible?: (arg: boolean) => void;
  id: number | undefined
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const { success, error } = getStatusRequest();
  const dispatch = useAppDispatch();
  const name = useInput('', { isEmpty: true });
  const description = useInput('', { isEmpty: true });

  const dataCreateTopic: CreateTopicType = {
    name: name.value,
    description: description.value,
  };

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [success]);

  const handleChangeEmail = () => {
    name.onBlur();
    description.onBlur();
    if (!name.isEmpty
            && !description.isEmpty
    ) {
      dispatch(createTopic(dataCreateTopic, id));
    }
  };

  return (
     <div className={cls.change_email__wrapper}>
        <div>
           <Input
             type='text'
             value={name.value}
             onChange={name.onChange}
             label='Название темы'
           />
           {(name.isDirty && name.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>
        <div>
           <Input
             type='text'
             value={description.value}
             onChange={description.onChange}
             label='Описание'
           />
           {(description.isDirty && description.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>
        <Button full variant='xs' background='violet-primary' onClick={handleChangeEmail}>
           Создать тему
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

export const CreateTopic = React.memo(Component);
