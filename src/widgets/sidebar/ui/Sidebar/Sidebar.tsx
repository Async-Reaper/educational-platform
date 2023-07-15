import React, { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import { SidebarLogo } from '../SidebarLogo/SidebarLogo';
import { SidebarAvatar } from '../SidebarAvatar/SidebarAvatar';
import { SidebarLinks } from '../SidebarLinks/SidebarLinks';
import { SidebarLogout } from '../SidebarLogout/SidebarLogout';
import cls from './Sidebar.module.scss';

const Component = () => {
  const user = getInfoUserSelector();
  const dispatch = useAppDispatch();
  const token: string = localStorage.getItem('token') || '';

  useEffect(() => {
    (token || user.data) && dispatch(getInfoUser());
  }, [dispatch, token]);

  return (
     <div className={cls.sidebar_wrapper}>
        <SidebarLogo />
        <div className={cls.sidebar_links__wrapper}>
           <SidebarAvatar user={user?.data} token={token} />
           <SidebarLinks />
           <SidebarLogout user={user?.data} token={token} />
        </div>
     </div>
  );
};

export const Sidebar = React.memo(Component);
