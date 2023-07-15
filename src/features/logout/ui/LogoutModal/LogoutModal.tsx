import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Button, ModalWindow, Typography } from 'shared/ui';
import { fetchLogout } from 'features/logout/model/api/logout';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import cls from './LogoutModal.module.scss';

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Component = ({ isVisible, setIsVisible }: Props) => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    setIsVisible(false);
    dispatch(fetchLogout());
  }, []);

  const onCloseModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
     <ModalWindow
       isVisible={isVisible}
       setIsVisible={setIsVisible}
     >
        <div className={cls.logout__modal}>
           <div className={cls.logout__text}>
              <Typography>
                 Вы действительно хотите выйти?
              </Typography>
           </div>
           <div className={cls.logout__buttons}>
              <Button variant='xs' border onClick={handleLogout}>
                 Да
              </Button>
              <Button variant='xs' onClick={onCloseModal}>
                 Нет
              </Button>
           </div>
        </div>
     </ModalWindow>
  );
};

export const LogoutModal = React.memo(Component);
