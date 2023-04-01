import React, { type FC, useEffect } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import {
  Button, Container, ModalWindow, Typography,
} from 'shared/ui';
import { Auth, Logout } from 'features';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import { getStatusRequest } from 'shared/libs/selectors';
import cls from './styles.module.scss';

interface Props {

}

const Component: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [isVisibleLogin, setIsVisibleLogin] = React.useState(false);
  const userData = getInfoUserSelector();
  const token: string = localStorage.getItem('token') || '';

  useEffect(() => {
    token && dispatch(getInfoUser());
  }, []);

  return (
     <div className={cls.header}>
        <Container>
           <div className={cls.header__inner}>
              <div className={cls.header__logo}>
                 <ColoredIcon name='logo' size={59} />
                 <small className={cls.logo__text}>
                    Кузбасский колледж архитектуры, строительства и цифровых технологий
                 </small>
              </div>
              <div className={cls.buttons__group}>
                 {
                     userData
                       ? (
                          <>
                             <Typography>
                                {userData?.email}
                             </Typography>
                             <Logout />
                          </>
                       )
                       : (
                          <Button variant='xs' onClick={() => setIsVisibleLogin(!isVisibleLogin)}>
                             Вход
                          </Button>
                       )
                  }
              </div>
           </div>
           <ModalWindow
             isVisible={isVisibleLogin}
             setIsVisible={() => setIsVisibleLogin(!isVisibleLogin)}
           >
              <Auth setVisible={setIsVisibleLogin} />
           </ModalWindow>
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
