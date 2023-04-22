import React, { useEffect, useState } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Auth, ChangeEmail, ChangePassword } from 'features';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {
  Avatar, Button, ModalWindow, Typography,
} from 'shared/ui';
import { API_URL } from 'shared/constants/baseURL';
// @ts-ignore
import dateFormat from 'dateformat';
import cls from './styles.module.scss';
import ava from '../../../../public/images/user/ava.png';

const Component = () => {
  const user = getInfoUserSelector();
  const dispatch = useAppDispatch();
  const token: string = localStorage.getItem('token') || '';

  const [isVisibleChangeEmail, setIsVisibleChangeEmail] = useState(false);
  const [isVisibleChangePassword, setIsVisibleChangePassword] = useState(false);

  const dateReg: string = dateFormat(user?.data?.registration_date, 'isoDateTime').replace(/T/, ' ');

  useEffect(() => {
    dispatch(getInfoUser());
  }, [dispatch]);

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           {user.data
             ? (
                <div className={cls.user_info}>
                   <div className={cls.top_info_part}>
                      <Avatar
                        src={user?.data?.icon
                          ? `${API_URL}${user?.data?.icon}`
                          : ava}
                        variant='xl'
                      />
                      <Typography variant='h1' color='violet-primary'>
                         #
                         {user?.data?.id}
                      </Typography>
                   </div>
                   <div className={cls.other__info}>
                      <div className={cls.info_item}>
                         <Typography variant='body' color='black-bg'>ФИО:</Typography>
                         <Typography variant='body' color='violet-primary'>
                            {user?.data?.full_name}
                         </Typography>
                      </div>
                      <div className={cls.info_item}>
                         <Typography variant='body' color='black-bg'>Почта:</Typography>
                         <Typography variant='body' color='violet-primary'>
                            {user?.data?.email}
                         </Typography>
                      </div>
                      <div className={cls.info_item}>
                         <Typography variant='body' color='black-bg'>Дата регистрации:</Typography>
                         <Typography variant='body' color='violet-primary'>
                            {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                            {dateReg.slice(0, dateReg?.length - 8)}
                         </Typography>
                      </div>
                      <div className={cls.info_item}>
                         <Button variant='xs' onClick={() => setIsVisibleChangeEmail(true)}>
                            Сменить
                            адрес
                         </Button>
                         <Button variant='xs' onClick={() => setIsVisibleChangePassword(true)}>
                            Сменить
                            пароль
                         </Button>
                      </div>
                   </div>
                   <ModalWindow
                     isVisible={isVisibleChangeEmail}
                     setIsVisible={() => setIsVisibleChangeEmail(!isVisibleChangeEmail)}
                   >
                      <ChangeEmail setVisible={setIsVisibleChangeEmail} />
                   </ModalWindow>
                   <ModalWindow
                     isVisible={isVisibleChangePassword}
                     setIsVisible={() => setIsVisibleChangePassword(!isVisibleChangePassword)}
                   >
                      <ChangePassword setVisible={setIsVisibleChangePassword} />
                   </ModalWindow>
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
