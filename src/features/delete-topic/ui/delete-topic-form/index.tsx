import React, { useEffect } from 'react';
import { Button, ErrorText, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getStatusDeleteTopicSelector } from 'features/delete-topic';
import { fetchDeleteTopic } from '../../model/api/deleteTopic';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void;
  idTopic: number | undefined;
  idCourse: number | undefined;
}

const Component: React.FC<Props> = ({ setVisible, idTopic, idCourse }) => {
  const dispatch = useAppDispatch();
  const statusDeleteTopic = getStatusDeleteTopicSelector();

  useEffect(() => {
    if (setVisible) {
      statusDeleteTopic.isSuccess && setVisible(false);
    }
  }, [setVisible, statusDeleteTopic.isSuccess]);

  const handleDeleteTopic = () => {
    dispatch(fetchDeleteTopic(idTopic));
  };

  return (
     <div className={cls.delete_topic__wrapper}>
        <Typography tag='span' variant='small' color='violet-primary'>
           Вы действительно хотите удалить данную тему?
        </Typography>
        <div className={cls.buttons__wrapper}>
           <Button full variant='xs' background='violet-primary' onClick={handleDeleteTopic}>
              Да
           </Button>
           <Button full variant='xs' background='violet-primary' onClick={() => setVisible && setVisible(false)}>
              Нет
           </Button>
        </div>
        {
            statusDeleteTopic.error
                && (
                <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                )
        }
     </div>
  );
};

export const DeleteTopicForm = React.memo(Component);
