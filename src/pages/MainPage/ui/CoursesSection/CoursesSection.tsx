import React from 'react';
import { Container, Typography } from 'shared/ui';
import { CoursesList } from 'widgets/CoursesList';

import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.section__wrapper}>
      <Container>
         <div className={cls.courses__wrapper}>
            <div className={cls.section__title}>
               <Typography tag='h2' variant='h1' color='gray-primary'>Наши курсы</Typography>
            </div>
            <CoursesList />
         </div>
      </Container>
   </div>
);

export const CoursesSection = React.memo(Component);
