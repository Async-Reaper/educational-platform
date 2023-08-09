import React from 'react';
import { Container, Typography } from 'shared/ui';
import { Element } from 'react-scroll';

import { Icons } from './Icons';
import { OpenTestBtn } from './OpenTestBtn';
import cls from './styles.module.scss';

const Component = () => (
   <Element name='test'>
      <div className={cls.test__wrapper}>
         <Container>
            <div className={cls.test__inner}>
               <div className={cls.icons__wrapper}>
                  <div className={cls.icons__title}>
                     <Typography tag='h1' variant='h1' color='gray-primary'>Тест-опросник</Typography>
                  </div>
                  <div className={cls.icons__inner}>
                     <Icons />
                  </div>
               </div>
               <div className={cls.content__wrapper}>
                  <div className={cls.content__title}>
                     <Typography tag='h1' variant='h2' color='gray-primary'>
                        Тест-опросник на профориентацию
                     </Typography>
                  </div>
                  <div className={cls.content__description}>
                     <Typography tag='span' variant='h3' color='gray-primary'>
                        Пройди тест и узнай что тебе ближе
                     </Typography>
                  </div>
                  <div>
                     <OpenTestBtn />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   </Element>
);

export const TestSection = React.memo(Component);
