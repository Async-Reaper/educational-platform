import React, { type FC, useEffect, useState } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import {
  Button, Container, ModalWindow, Typography,
} from 'shared/ui';
import { AuthPhone } from 'features';
import { useNavigate } from 'react-router-dom';
import cls from './styles.module.scss';

interface Props {

}

const Component: FC<Props> = () => {
  const path = '/';
  const [isVisibleLogin, setIsVisibleLogin] = React.useState(false);
  const navigate = useNavigate();

  const [firstnameState, setFirstname] = useState<string | undefined>('');
  const [surnameState, setSurname] = useState<string | undefined>('');

  const firstname: string = localStorage.getItem('firstname') || '';
  const surname: string = localStorage.getItem('surname') || '';

  useEffect(() => {
    if (firstname && surname) {
      setFirstname(firstname);
      setSurname(surname);
    }
  }, [firstname, surname]);
  const logout = () => {
    setFirstname(undefined);
    setSurname(undefined);
    localStorage.removeItem('id');
    localStorage.removeItem('avatar');
    localStorage.removeItem('firstname');
    localStorage.removeItem('surname');
    localStorage.removeItem('phone');
  };
  return (
     <div className={cls.header}>
        <Container>
           <div className={cls.header__inner}>
              <div className={cls.header__logo}>
                 <ColoredIcon name='logo' size={59} />
                 <small className={cls.logo__text}>
                    Кузбасский колледж архитектуры, строительства и цифровых технологий
                 </small>
              </div>
              <div className={cls.buttons__group}>
                 {
                     firstname
                       ? (
                          <>
                             <Typography>
                                {firstnameState}
                             </Typography>
                             <Typography>
                                {surnameState}
                             </Typography>
                             <Button variant='xs' border onClick={logout}>
                                <Typography>
                                   Выход
                                </Typography>
                             </Button>
                          </>
                       )
                       : (
                          <>
                             <Button variant='xs' border onClick={() => navigate('/signup')}>
                                <Typography>
                                   Регистрация
                                </Typography>
                             </Button>
                             <Button variant='xs' onClick={() => setIsVisibleLogin(!isVisibleLogin)}>
                                Вход
                             </Button>
                          </>
                       )
                  }
              </div>
           </div>
           <ModalWindow
             isVisible={isVisibleLogin}
             setIsVisible={() => setIsVisibleLogin(!isVisibleLogin)}
           >
              <AuthPhone setVisible={setIsVisibleLogin} />
           </ModalWindow>
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
