import React from 'react';
import { ColoredIcon, Icon } from 'shared/libs/icons';
import { AppLink } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.sidebar_wrapper}>
      <div className={cls.logo_wrapper}>
         <AppLink to='/platform'>
            <ColoredIcon name='logo' color='gray-secondary' size={59} />
         </AppLink>
      </div>
      <div className={cls.links_wrapper}>
         <div className={cls.user_link__wrapper}>
            <AppLink to='/private-cabinet'>
               <Icon name='user' color='gray-secondary' size={55} />
            </AppLink>
         </div>
         <div className={cls.home_link__wrapper}>
            <AppLink to='/'>
               <Icon name='home' color='gray-secondary' size={55} />
            </AppLink>
         </div>
         <div className={cls.message_link__wrapper}>
            <AppLink to='/platform'>
               <Icon name='message' color='gray-secondary' size={55} />
            </AppLink>
         </div>
      </div>
   </div>
);

export const Sidebar = React.memo(Component);
