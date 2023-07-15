import React, {
  type FC, useCallback, useEffect, useState,
} from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import {
  AppLink, Button, Container, ModalWindow, Typography,
} from 'shared/ui';
import { Auth } from 'features';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import { authSelector } from 'features/auth';
import { LogoutModal } from 'features/logout';
import cls from './styles.module.scss';
import { HeaderToolbar } from '../header-toolbar';

interface Props {

}

const Component: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [isVisibleLogin, setIsVisibleLogin] = React.useState(false);
  const [isVisibleLogout, setIsVisibleLogout] = React.useState(false);

  const userData = getInfoUserSelector();
  const authData = authSelector();
  const token: string = localStorage.getItem('token') || '';

  const [isVisibleToolbar, setIsVisibleToolbar] = useState(false);

  const onShowVisibleToolbar = useCallback(() => {
    setIsVisibleToolbar(true);
  }, []);

  const onHideVisibleToolbar = useCallback(() => {
    setIsVisibleToolbar(false);
  }, []);

  useEffect(() => {
    token && dispatch(getInfoUser());
  }, [authData.data]);

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
                            userData.data
                              ? (
                                 <>
                                    <div className={cls.header_user__settings}>
                                       <AppLink
                                         to='/private-cabinet'
                                         onMouseOver={onShowVisibleToolbar}
                                         onMouseOut={onHideVisibleToolbar}
                                       >
                                          <Typography>
                                             {userData?.data?.full_name}
                                          </Typography>
                                       </AppLink>
                                       <HeaderToolbar isVisible={isVisibleToolbar}>
                                          Перейти в личный кабинет
                                       </HeaderToolbar>
                                    </div>
                                    <Button variant='xs' border onClick={() => setIsVisibleLogout(true)}>
                                       <Typography>
                                          Выход
                                       </Typography>
                                    </Button>
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
           <LogoutModal isVisible={isVisibleLogout} setIsVisible={setIsVisibleLogout} />
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
