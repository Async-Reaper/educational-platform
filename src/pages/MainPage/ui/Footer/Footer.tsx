import React from 'react';
import { AppLink, Container, Typography } from 'shared/ui';
import { Social } from 'shared/ui/social';

import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.section__wrapper}>
      <Container>
         <div className={cls.footer__inner}>
            <div className={cls.footer__content}>
               <div className={cls.part__content}>
                  <AppLink to='/platform'>
                     <Typography variant='body' color='white-bg'>
                        Ссылка на сайт
                     </Typography>
                  </AppLink>
                  <Typography variant='body' color='white-bg'>
                     s.kuranova@kasict.ru
                  </Typography>
               </div>
               <div className={cls.part__content}>
                  <Typography variant='body' color='white-bg'>
                     Пользовательское соглашение
                  </Typography>
                  <Typography variant='body' color='white-bg'>
                     Согласие на обработку персональных данных
                  </Typography>
               </div>
            </div>
            <div className={cls.social__wrapper}>
               <Social />
            </div>
         </div>
      </Container>
   </div>
);

export const Footer = React.memo(Component);
