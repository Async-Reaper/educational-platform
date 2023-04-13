import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Button, Toolbar, Typography } from 'shared/ui';
import { logout } from 'features/logout/model/api/logout';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import LogoutIcon from '@mui/icons-material/Logout';
import cls from './styles.module.scss';
import { getInfoUser } from '../../../entities/user';

interface Props {
  isIcon?: boolean
}

const Component: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const [isVisibleClue, setIsVisibleClue] = useState(false);

  const onShowVisibleClue = useCallback(() => {
    setIsVisibleClue(true);
  }, []);

  const onHideVisibleClue = useCallback(() => {
    setIsVisibleClue(false);
  }, []);

  const {
    isIcon = false,
  } = props;

  const handleLogout = () => dispatch(logout());

  return (
     <>
        {
                isIcon
                  ? (
                     <div
                       className={cls.logout_icon}
                       onMouseOver={onShowVisibleClue}
                       onMouseOut={onHideVisibleClue}
                       onClick={() => handleLogout()}
                     >
                        <LogoutIcon sx={{ fontSize: 40 }} />
                     </div>
                  )
                  : (
                     <Button variant='xs' border onClick={() => handleLogout()}>
                        <Typography>
                           Выход
                        </Typography>
                     </Button>
                  )
            }
        <Toolbar isVisible={isVisibleClue}>Выйти</Toolbar>
     </>
  );
};

export const Logout = React.memo(Component);
