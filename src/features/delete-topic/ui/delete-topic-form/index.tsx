import React, { useEffect } from 'react';
import { Button, ErrorText, Typography } from 'shared/ui';
import { getStatusRequest } from 'shared/libs/selectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { deleteTopic } from '../../model/api';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void;
  idTopic: number | undefined;
  idCourse: number | undefined;
}

const Component: React.FC<Props> = ({ setVisible, idTopic, idCourse }) => {
  const { success, error } = getStatusRequest();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [setVisible, success]);

  const handleDeleteTopic = () => {
    dispatch(deleteTopic(idTopic));
  };

  return (
     <div className={cls.delete_topic__wrapper}>
        <Typography tag='span' variant='small' color='violet-primary'>Вы действительно хотите удалить данную тему?</Typography>
        <div className={cls.buttons__wrapper}>
           <Button full variant='xs' background='violet-primary' onClick={handleDeleteTopic}>
              Да
           </Button>
           <Button full variant='xs' background='violet-primary' onClick={() => setVisible && setVisible(false)}>
              Нет
           </Button>
        </div>
        {
            error
                && (
                <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                )
        }
     </div>
  );
};

export const DeleteTopicForm = React.memo(Component);
