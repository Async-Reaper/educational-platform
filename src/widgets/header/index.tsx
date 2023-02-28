import React, { type FC } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import { Button, Container, Typography } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {

}

const Component: FC<Props> = () => {
  const path = '/';
  return (
     <div className={cls.header}>
        <Container>
           <div className={cls.header__inner}>
              <div className={cls.header__logo}>
                 <ColoredIcon name='logo' size={35} />
                 <small className={cls.logo__text}>Solutions</small>
              </div>
              <div className={cls.buttons__group}>
                 <Button variant='xs' border>Регистрация</Button>
                 <Button variant='xs'>Вход</Button>
              </div>
           </div>
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
