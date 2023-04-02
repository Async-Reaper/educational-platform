import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Auth } from 'features';
import { User } from 'entities';
import { getInfoUserSelector } from 'entities/user';
import cls from './styles.module.scss';

const Component = () => {
  const user = getInfoUserSelector();
  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           {user || localStorage.getItem('token')
             ? (
                <div>
                   <User />
                </div>
             )
             : (
                <div className={cls.auth__wrapper}>
                   <Auth />
                </div>
             )}
        </div>
     </div>
  );
};

export const PrivateCabinet = Component;
