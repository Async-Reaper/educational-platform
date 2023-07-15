import React, { useEffect } from 'react';
import { Button, ErrorText, Input } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { CreateTopicType } from 'features/create-topic/model/types';
import { fetchCreateTopic } from 'features/create-topic/model/api/createTopic';
import {
  getStatusCreateTopicSelector,
} from 'features/create-topic/model/selectors/getStatusCreateTopicSelector/getStatusCreateTopicSelector';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void;
  id: number | undefined
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const dispatch = useAppDispatch();
  const name = useInput('', { isEmpty: true });
  const description = useInput('', { isEmpty: true });

  const statusCreateTopic = getStatusCreateTopicSelector();

  const dataCreateTopic: CreateTopicType = {
    id,
    name: name.value,
    description: description.value,
  };

  useEffect(() => {
    if (setVisible) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      statusCreateTopic.isSuccess && setVisible(false);
    }
  }, [setVisible, statusCreateTopic.isSuccess]);

  const handleChangeEmail = () => {
    name.onBlur();
    description.onBlur();
    if (!name.isEmpty
            && !description.isEmpty
    ) {
      dispatch(fetchCreateTopic(dataCreateTopic));
    }
  };

  return (
     <div className={cls.create_topic__wrapper}>
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
                statusCreateTopic.error
                && (
                <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                )
            }
     </div>
  );
};

export const CreateTopicForm = React.memo(Component);
