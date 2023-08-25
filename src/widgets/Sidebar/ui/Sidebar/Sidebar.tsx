import React, { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getInfoUser, userData } from 'entities/User';
import { useSelector } from 'react-redux';
import { SidebarLogo } from '../SidebarLogo/SidebarLogo';
import { SidebarAvatar } from '../SidebarAvatar/SidebarAvatar';
import { SidebarLinks } from '../SidebarLinks/SidebarLinks';
import { SidebarLogout } from '../SidebarLogout/SidebarLogout';
import cls from './Sidebar.module.scss';

const Component = () => {
   const user = useSelector(userData);
   const dispatch = useAppDispatch();
   const token: string = localStorage.getItem('token') || '';

   useEffect(() => {
      (token || user) && dispatch(getInfoUser());
   }, [dispatch, token]);

   return (
      <div className={cls.sidebar}>
         <div className={cls.sidebar_wrapper}>
            <SidebarLogo />
            <div className={cls.sidebar_links__wrapper}>
               <SidebarAvatar user={user} token={token} />
               <SidebarLinks />
               <SidebarLogout user={user} token={token} />
            </div>
         </div>
      </div>
   );
};

export const Sidebar = React.memo(Component);
