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
import programming from './img/programming.png';
import webDesign from './img/web-design.png';
import secureInformation from './img/secure-information.png';
import Modeling from './img/3d-modeling.png';

const Component = () => {
  const [isVisible, setIsVisible] = useState(false);
  const coursesData = [
    {
      id: 1,
      title: 'Программирование',
      src: programming,
    },
    {
      id: 3,
      title: 'Веб-дизайн',
      src: webDesign,
    },
    {
      id: 4,
      title: 'Средства защиты информации',
      src: secureInformation,
    },
    {
      id: 4,
      title: '3Д моделирование',
      src: Modeling,
    },
  ];

  return (
     <SectionWrapper>
        <Container>
           <CoursesWrapper>
              <SectionTitle />
              <CoursesList>
                 {
                      coursesData.map((course) => (
                         <AppLink to='/course'>
                            <Course name={course.title} src={course.src} />
                         </AppLink>
                      ))
                  }
              </CoursesList>
           </CoursesWrapper>
           <UploadCourseWrapper>
              <UploadDescription />
              <UploadButtonWrapper>
                 <Button variant='m' background='white-bg' onClick={() => setIsVisible(true)}>
                    <Typography tag='strong' variant='h3'>Загрузить ресурс</Typography>
                    <Icon name='lightness' size={36} />
                 </Button>
              </UploadButtonWrapper>
           </UploadCourseWrapper>
        </Container>
        <ModalWindow isVisible={isVisible} setIsVisible={setIsVisible}>
           <UploadCourse setIsVisible={setIsVisible} />
        </ModalWindow>
     </SectionWrapper>
  );
};

export const CoursesSection = React.memo(Component);
