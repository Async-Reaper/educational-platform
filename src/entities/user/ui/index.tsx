import ava from 'pages/private-cabinet/img/2uBiAY5PuDw.jpg';
import React from 'react';
import { Avatar, Typography } from 'shared/ui';
import { User } from '../types';
import cls from './styles.module.scss';

const Component = () => {
  const user: User = {
    id: '34534',
    avatar: ava,
    firstname: '',
    surname: '',
    phone: '+79235639609',
  };
  return (
     <div className={cls.user_info}>
        <div className={cls.top_info_part}>
           <Avatar src={user.avatar} variant='xl' />
           <Typography variant='h1' color='violet-primary'>
              #
              {user.id}
           </Typography>
        </div>
        <div className={cls.other__info}>
           <div className={cls.info_item}>
              <Typography variant='h3'>
                 Имя:
              </Typography>
              <Typography variant='h3' color='violet-primary'>
                 {user.firstname}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='h3'>
                 Фамилия:
              </Typography>
              <Typography variant='h3' color='violet-primary'>
                 {user.surname}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='h3'>
                 Телефон:
              </Typography>
              <Typography variant='h3' color='violet-primary'>
                 {user.phone}
              </Typography>
           </div>
        </div>
     </div>
  );
};

export const User = React.memo(Component);
