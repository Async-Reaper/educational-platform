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
                 <ColoredIcon name='logo' size={59} />
                 <small className={cls.logo__text}>
                    Кузбасский колледж архитектуры, строительства и цифровых технологий
                 </small>
              </div>
              <div className={cls.buttons__group}>
                 <Button variant='xs' border>
                    <Typography>
                       Регистрация
                    </Typography>
                 </Button>
                 <Button variant='xs'>Вход</Button>
              </div>
           </div>
        </Container>
     </div>
  );
};

export const Header = React.memo(Component);
