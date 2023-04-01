import React, { useEffect, useState } from 'react';
import { getInfoUser, getInfoUserSelector } from 'entities/user';
import {
  Avatar, Button, ModalWindow, Typography,
} from 'shared/ui';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
// @ts-ignore
import dateFormat from 'dateformat';
import { ChangeEmail, ChangePassword } from 'features';
import cls from './styles.module.scss';
import ava from '../img/ava.png';

const Component = () => {
  const data = getInfoUserSelector();
  const dispatch = useAppDispatch();
  const token: string = localStorage.getItem('token') || '';
  const [isVisibleChangeEmail, setIsVisibleChangeEmail] = useState(false);
  const [isVisibleChangePassword, setIsVisibleChangePassword] = useState(false);

  useEffect(() => {
    token && dispatch(getInfoUser());
  }, []);

  const dateReg: string = dateFormat(data?.registration_date, 'isoDateTime').replace(/T/, ' ');

  return (
     <div className={cls.user_info}>
        <div className={cls.top_info_part}>
           <Avatar src={data?.icon || ava} variant='xl' />
           <Typography variant='h1' color='violet-primary'>
              #
              {data?.id}
           </Typography>
        </div>
        <div className={cls.other__info}>
           <div className={cls.info_item}>
              <Typography variant='h3'>ФИО:</Typography>
              <Typography variant='h3' color='violet-primary'>
                 {data?.full_name}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='h3'>Почта:</Typography>
              <Typography variant='h3' color='violet-primary'>
                 {data?.email}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='h3'>Дата регистрации:</Typography>
              <Typography variant='h3' color='violet-primary'>
                 {dateReg.slice(0, dateReg?.length - 8)}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Button onClick={() => setIsVisibleChangeEmail(true)}>Сменить адрес</Button>
              <Button onClick={() => setIsVisibleChangePassword(true)}>Сменить пароль</Button>
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
  );
};

export const User = React.memo(Component);
