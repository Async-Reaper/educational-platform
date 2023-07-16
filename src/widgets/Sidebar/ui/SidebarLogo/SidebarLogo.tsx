import React from 'react';
import { AppLink } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './SidebarLogo.module.scss';

const Component = () => (
   <div className={cls.logo_wrapper}>
      <AppLink to='/platform'>
         <ColoredIcon name='logo' color='gray-secondary' size={59} />
      </AppLink>
   </div>
);

export const SidebarLogo = React.memo(Component);
