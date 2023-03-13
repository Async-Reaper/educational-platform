import React, { type FC } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import {
  Button, Container, ModalWindow, Typography,
} from 'shared/ui';
import cls from './styles.module.scss';
import {AuthPhone} from "features";
import {Signup} from "features/signup";

interface Props {

}

const Component: FC<Props> = () => {
  const path = '/';
  const [isVisibleLogin, setIsVisibleLogin] = React.useState(false);
  const [isVisibleSignup, setIsVisibleSignup] = React.useState(false);

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
                 <Button variant='xs' border onClick={() => setIsVisibleSignup(!isVisibleSignup)}>
                    <Typography>
                       Регистрация
                    </Typography>
                 </Button>
                 <Button variant='xs' onClick={() => setIsVisibleLogin(!isVisibleLogin)}>
                    Вход
                 </Button>
              </div>
           </div>
           <ModalWindow
             isVisible={isVisibleLogin}
             setIsVisible={() => setIsVisibleLogin(!isVisibleLogin)}
           >
              <AuthPhone />
           </ModalWindow>
           <ModalWindow
             isVisible={isVisibleSignup}
             setIsVisible={() => setIsVisibleSignup(!isVisibleSignup)}
           >
              <Signup />
           </ModalWindow>
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
