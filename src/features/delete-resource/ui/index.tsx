import React, { useEffect } from 'react';
import { Button, ErrorText, Typography } from 'shared/ui';
import { getStatusRequest } from 'shared/libs/selectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { deleteResource } from '../model/api';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void;
  id: number
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const { success, error } = getStatusRequest();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (setVisible) {
      success && setVisible(false);
    }
  }, [setVisible, success]);

  const handleDeleteResource = () => {
    dispatch(deleteResource(id));
  };

  return (
     <div className={cls.delete_resource__wrapper}>
        <Typography tag='span' variant='small' color='violet-primary'>Вы действительно хотите удалить данный ресурс?</Typography>
        <div className={cls.buttons__wrapper}>
           <Button full variant='xs' background='violet-primary' onClick={handleDeleteResource}>
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

export const DeleteResource = React.memo(Component);
