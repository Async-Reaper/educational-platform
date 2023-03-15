import ava from 'pages/private-cabinet/img/2uBiAY5PuDw.jpg';
import React from 'react';
import { Avatar, Typography } from 'shared/ui';
import { useAppSelector } from 'shared/libs/hooks/useAppSelector';
import { UserType } from '../model/types';
import cls from './styles.module.scss';

const Component = () => {
  const user: UserType = {
    id: '34534',
    avatar: ava,
    firstname: '',
    surname: '',
    phone: '+79235639609',
  };
  // const getInfoUserSelector = useAppSelector((state) => state.user.data);
  const id = localStorage.getItem('id');
  const firstname = localStorage.getItem('firstname');
  const surname = localStorage.getItem('surname');
  const avatar = localStorage.getItem('avatar');
  const phone = localStorage.getItem('phone');
  return (
     <div className={cls.user_info}>
        <div className={cls.top_info_part}>
           <Avatar src={avatar} variant='xl' />
           <Typography variant='h1' color='violet-primary'>
              #
              {/* {getInfoUserSelector?.id} */}
              {id}
           </Typography>
        </div>
        <div className={cls.other__info}>
           <div className={cls.info_item}>
              <Typography variant='h3'>Имя:</Typography>
              <Typography variant='h3' color='violet-primary'>
                 {/* {getInfoUserSelector?.firstname} */}
                 {firstname}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='h3'>Фамилия:</Typography>
              <Typography variant='h3' color='violet-primary'>
                 {/* {getInfoUserSelector?.surname} */}
                 {surname}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='h3'>Телефон:</Typography>
              <Typography variant='h3' color='violet-primary'>
                 {/* {getInfoUserSelector?.phone} */}
                 {phone}
              </Typography>
           </div>
        </div>
     </div>
  );
};

export const User = React.memo(Component);
