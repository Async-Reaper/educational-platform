import { Course } from 'entities/course';
import React from 'react';
import { Icon } from 'shared/libs/icons';
import { Button, Container, Typography } from 'shared/ui';
import mac from './img/MacBook.png';

const Component = () => (
   <div className='courses__sectionWrapper'>
      <Container>
         <div className='courses__wrapper'>
            <Typography tag='h3' variant='h2'>Популярные курсы</Typography>
            <div className='courses__list'>
               <Course name='course' src={mac} />
            </div>
         </div>
         <div className='upload__course'>
            <div className='upload__description'>
               <Typography tag='h1' variant='h3'>Загрузка курса</Typography>
               <Typography tag='h1' variant='h3'>У нас есть план эвакуации из любой проблемной ситуации.</Typography>
            </div>
            <div className='upload__button'>
               <Button variant='l'>
                  <Typography tag='strong' variant='h3'>Загрузить курс</Typography>
                  <Icon name='lightness' />
               </Button>
            </div>
         </div>
      </Container>
   </div>
);

export const CoursesSection = React.memo(Component);
