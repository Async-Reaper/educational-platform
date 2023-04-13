import React, { Suspense, useEffect, useState } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Auth } from 'features';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import { User } from '../../entities';
import cls from './styles.module.scss';
import { Loader } from '../../shared/ui';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';

const Component = () => {
  const user = getInfoUserSelector();
  const dispatch = useAppDispatch();
  const token: string = localStorage.getItem('token') || '';

  useEffect(() => {
    token && dispatch(getInfoUser());
  }, [dispatch, token]);

  return (
     <Suspense fallback={<Loader />}>
        <div className='page_platform'>
           <Sidebar />
           <div className='page_platform__content'>
              { token && user.data
                ? (
                   <div>
                      <User user={user?.data} />
                   </div>
                )
                : (
                   <div className={cls.auth__wrapper}>
                      <Auth />
                   </div>
                )}
           </div>
        </div>
     </Suspense>
  );
};

export default Component;
