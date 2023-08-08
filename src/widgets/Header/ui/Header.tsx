import React, {
  type FC, useCallback, useEffect, useState,
} from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import {
  AppLink, Button, Container, Typography,
} from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getInfoUser, userData } from 'entities/User';
import { authData, AuthModal } from 'features/Auth';
import { LogoutModal } from 'features/Logout';
import { useSelector } from 'react-redux';
import { useModal } from 'shared/hooks/useModal/useModal';
import cls from './styles.module.scss';
import { HeaderToolbar } from './HeaderToolbar/HeaderToolbar';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';

interface Props {

}

const Component: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { isOpen: isOpenAuth, open: openAuth, close: closeAuth } = useModal();
  const { isOpen: isOpenLogout, open: openLogout, close: closeLogout } = useModal();

  const user = useSelector(userData);
  const auth = useSelector(authData);

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
  }, [auth]);

  return (
     <div className={cls.header}>
        <Container>
           <div className={cls.header__inner}>
              <HeaderLogo />
              <div className={cls.buttons__group}>
                 {
                     user
                       ? (
                          <>
                             <div className={cls.header_user__settings}>
                                <AppLink
                                  to='/private-cabinet'
                                  onMouseOver={onShowVisibleToolbar}
                                  onMouseOut={onHideVisibleToolbar}
                                >
                                   <Typography>
                                      {user?.full_name}
                                   </Typography>
                                </AppLink>
                                <HeaderToolbar isVisible={isVisibleToolbar}>
                                   Перейти в личный кабинет
                                </HeaderToolbar>
                             </div>
                             <Button variant='xs' border onClick={openLogout}>
                                <Typography>
                                   Выход
                                </Typography>
                             </Button>
                          </>
                       )
                       : (
                          <Button variant='xs' onClick={openAuth}>
                             Вход
                          </Button>
                       )
                        }
              </div>
           </div>
           {
                isOpenAuth
                && (
                <AuthModal
                  isOpen={isOpenAuth}
                  onClose={closeAuth}
                />
                )
            }
           {
                isOpenLogout
                && (
                <LogoutModal
                  isOpen={isOpenLogout}
                  onClose={closeLogout}
                />
                )
            }
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
