import { Course } from 'entities/course';
import React, { useState } from 'react';
import {
  AppLink, Button, Container, ModalWindow, Typography,
} from 'shared/ui';
import { UploadCourse } from 'features';
import { SectionWrapper } from 'widgets/courses-section/ui/wrappers/section-wraperr';
import {
  CoursesList,
  CoursesWrapper,
  SectionTitle,
  UploadButtonWrapper,
  UploadCourseWrapper,
  UploadDescription,
} from 'widgets/courses-section/ui';
import { Icon } from 'shared/libs/icons';
import mac from './img/MacBook.png';

const Component = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
     <SectionWrapper>
        <Container>
           <CoursesWrapper>
              <SectionTitle />
              <CoursesList>
                 <AppLink to='/course'>
                    <Course name='course' src={mac} />
                 </AppLink>
                 <AppLink to='/course'>
                    <Course name='course' src={mac} />
                 </AppLink>
                 <AppLink to='/course'>
                    <Course name='course' src={mac} />
                 </AppLink>
                 <AppLink to='/course'>
                    <Course name='course' src={mac} />
                 </AppLink>
              </CoursesList>
           </CoursesWrapper>
           <UploadCourseWrapper>
              <UploadDescription />
              <UploadButtonWrapper>
                 <Button variant='m' background='white-bg' onClick={() => setIsVisible(true)}>
                    <Typography tag='strong' variant='h3'>Загрузить курс</Typography>
                    <Icon name='lightness' size={36} />
                 </Button>
              </UploadButtonWrapper>
           </UploadCourseWrapper>
        </Container>
        <ModalWindow isVisible={isVisible} setIsVisible={setIsVisible}>
           <UploadCourse />
        </ModalWindow>
     </SectionWrapper>
  );
};

export const CoursesSection = React.memo(Component);
