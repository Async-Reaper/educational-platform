import React, { useEffect } from 'react';
import { Button, ErrorText, Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getStatusDeleteResource } from 'features/delete-resource/model/selectors';
import { fetchDeleteResource } from '../model/api/deleteResource';
import cls from './styles.module.scss';

interface Props {
  setVisible?: (arg: boolean) => void;
  id: number
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const statusDeleteResource = getStatusDeleteResource();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (setVisible) {
      statusDeleteResource.isSuccess && setVisible(false);
    }
  }, [setVisible, statusDeleteResource.isSuccess]);

  const handleDeleteResource = () => {
    dispatch(fetchDeleteResource(id));
  };

  return (
     <div className={cls.delete_resource__wrapper}>
        <Typography tag='span' variant='small' color='violet-primary'>
           Вы действительно хотите удалить данный ресурс?
        </Typography>
        <div className={cls.buttons__wrapper}>
           <Button full variant='xs' background='violet-primary' onClick={handleDeleteResource}>
              Да
           </Button>
           <Button full variant='xs' background='violet-primary' onClick={() => setVisible && setVisible(false)}>
              Нет
           </Button>
        </div>
        {
            statusDeleteResource.error
                && (
                <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                )
        }
     </div>
  );
};

export const DeleteResource = React.memo(Component);
