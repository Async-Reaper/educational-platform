import React, { useEffect } from 'react';
import { AppLink, Avatar, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import { useSelector } from 'react-redux';
import { getInfoUser, userData } from 'entities/User';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import ava from '../../../../../../public/images/mock/ava.png';
import cls from './styles.module.scss';


const Component = () => {
  const user = useSelector(userData);
  const dispatch = useAppDispatch();
  const token: string = localStorage.getItem('token') || '';

  useEffect(() => {
    (token || user) && dispatch(getInfoUser());
  }, [dispatch, token]);
  return (
     <AppLink to='/private-cabinet'>
        {
                user || token
                  ? (
                     <div className={cls.header__username}>
                        <Avatar
                          src={user?.icon
                            ? `${__API__}${user?.icon}`
                            : ava}
                          variant='xs'
                          rounded
                        />
                        <Typography>{user?.full_name}</Typography>
                     </div>
                  )
                  : <Icon name='user' color='violet-primary' size={46} />
            }
     </AppLink>
  );
};

export const HeaderUsername = React.memo(Component);
