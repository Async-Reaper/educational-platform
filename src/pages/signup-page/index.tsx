import React from 'react';
import { Signup } from 'features/signup';
import { AppLink, BlackBG, BlackGradient } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <BlackBG>
      <div className={cls.signup_page__wrapper}>
         <div className={cls.signup_link__wrapper}>
            <AppLink to='/'>
               <Icon name='back_player' size={14} />
               Назад
            </AppLink>
         </div>
         <div className={cls.signup__wrapper}>
            <Signup />
         </div>
      </div>
   </BlackBG>
);

export const SignupPage = React.memo(Component);
