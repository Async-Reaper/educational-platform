import React from 'react';
import { Button, Typography } from 'shared/ui';
import { logout } from 'features/logout/model/api/logout';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';

const Component = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logout());

  return (
     <Button variant='xs' border onClick={() => handleLogout()}>
        <Typography>
           Выход
        </Typography>
     </Button>
  );
};

export const Logout = React.memo(Component);
