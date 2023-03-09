import React from 'react';
import { ColoredIcon, Icon } from 'shared/libs/icons';
import { AppLink } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.sidebar_wrapper}>
      <div className={cls.logo_wrapper}>
         <ColoredIcon name='logo' size={59} />
      </div>
      <div className={cls.links_wrapper}>
         <div className={cls.user_link__wrapper}>
            <AppLink to='/platform'>
               <Icon name='user' size={55} />
            </AppLink>
         </div>
         <div className={cls.home_link__wrapper}>
            <AppLink to='/'>
               <Icon name='home' size={55} />
            </AppLink>
         </div>
         <div className={cls.message_link__wrapper}>
            <AppLink to='/platform'>
               <Icon name='message' size={55} />
            </AppLink>
         </div>
      </div>
   </div>
);

export const Sidebar = React.memo(Component);
