import React from 'react';
import { AppLink, Button, Typography } from 'shared/ui';
import { Link } from 'react-scroll';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.content__wrapper}>
      <div className={cls.content__text}>
         <Typography variant='h2' color='white-bg'>
            Интеллектуальная платформа
            <span> для обмена педагогическим опытом</span>
         </Typography>
      </div>
      <div className={cls.content__buttons}>
         <Link to='test' spy smooth duration={500}>
            <Button variant='l' background='violet-primary'>
               <Typography tag='span' variant='body'>
                  Начать сейчас
               </Typography>
               <Icon name='play' size={22} color='white-bg' />
            </Button>
         </Link>
         <AppLink to='/platform'>
            <Button variant='l' background='gray-primary' border>
               <Typography tag='span' variant='body'>
                  К курсам
               </Typography>
               <Icon name='arrow_right' width={30} height={10} color='violet-primary' />
            </Button>
         </AppLink>
      </div>
   </div>
);

export const TopSectionContent = React.memo(Component);
