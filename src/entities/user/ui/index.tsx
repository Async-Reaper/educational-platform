import React from 'react';
import { Avatar, Typography } from 'shared/ui';
import ava from 'pages/private-cabinet/img/2uBiAY5PuDw.jpg';
import { UserType } from 'entities/user/types';
import cls from './styles.module.scss';

const Component = () => {
  const user: UserType = {
    avatar: ava,
    firstname: '',
    surname: '',
    phone: '+79235639609',
  };
  return (
     <div className={cls.user_info}>
        <Avatar src={user.avatar} />
        <Typography>
           Имя:
           {user.firstname}
        </Typography>
        <Typography>
           Фамилия:
           {user.surname}
        </Typography>
        <Typography>
           <span>Телефон:</span>
           {' '}
           {user.phone}
        </Typography>
     </div>
  );
};

export const User = React.memo(Component);
