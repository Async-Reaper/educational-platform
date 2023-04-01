import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Auth, UploadResource } from 'features';
import { User } from 'entities';
import cls from './styles.module.scss';

const Component = () => (
   <div className='page_platform'>
      <Sidebar />
      <div className='page_platform__content'>
         {localStorage.getItem('token')
           ? (
              <div>
                 <User />
                 <UploadResource />
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

export const PrivateCabinet = Component;
