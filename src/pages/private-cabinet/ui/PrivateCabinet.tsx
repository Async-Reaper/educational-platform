import React, { useEffect } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Auth } from 'features';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import { User } from 'entities';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import cls from './styles.module.scss';

const Component = () => {
  const user = getInfoUserSelector();
  const dispatch = useAppDispatch();
  const token: string = localStorage.getItem('token') || '';

  useEffect(() => {
    token && dispatch(getInfoUser());
  }, [dispatch, token]);

  return (
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
  );
};

export default Component;
