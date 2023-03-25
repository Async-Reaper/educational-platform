import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { User } from 'entities';
import { Auth, UploadResource } from 'features';
import cls from './styles.module.scss';

const Component = () => (
   <div className='page_platform'>
      <Sidebar />
      <div className='page_platform__content'>
         {localStorage.getItem('user')
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
         {/* <TheirCourses /> */}

      </div>
   </div>
);

export const PrivateCabinet = Component;
