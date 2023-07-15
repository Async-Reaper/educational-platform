import React, { useCallback, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppLink, Toolbar } from 'shared/ui';
import LoginIcon from '@mui/icons-material/Login';
import { LogoutModal } from 'features/logout';
import { UserType } from 'entities/user';
import cls from './SidebarLogout.module.scss';

interface Props {
  user: UserType | undefined | null;
  token: string;
}

const Component = ({ user, token }: Props) => {
  const [isVisibleClue, setIsVisibleClue] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const onShowVisibleLogoutModal = useCallback(() => {
    setIsLogoutModal(true);
  }, []);

  const onShowVisibleClue = useCallback(() => {
    setIsVisibleClue(true);
  }, []);

  const onHideVisibleClue = useCallback(() => {
    setIsVisibleClue(false);
  }, []);

  return (
     <div className={cls.logout_wrapper}>
        {
                user || token
                  ? (
                     <div
                       className={cls.logout_icon}
                       onMouseOver={onShowVisibleClue}
                       onMouseOut={onHideVisibleClue}
                       onClick={onShowVisibleLogoutModal}
                     >
                        <LogoutIcon sx={{ fontSize: 40 }} />
                        <Toolbar isVisible={isVisibleClue}>Выйти</Toolbar>
                     </div>
                  )
                  : (
                     <AppLink
                       to='/private-cabinet'
                       onMouseOver={onShowVisibleClue}
                       onMouseOut={onHideVisibleClue}
                     >
                        <LoginIcon color='secondary' sx={{ fontSize: 40 }} />
                        <Toolbar isVisible={isVisibleClue}>Войти</Toolbar>
                     </AppLink>
                  )
            }
        <LogoutModal isVisible={isLogoutModal} setIsVisible={setIsLogoutModal} />
     </div>

  );
};

export const SidebarLogout = React.memo(Component);
