import { Course } from 'entities/course';
import React from 'react';
import { Container } from 'shared/ui';
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
import mac from './img/MacBook.png';

const Component = () => (
   <SectionWrapper>
      <Container>
         <CoursesWrapper>
            <SectionTitle />
            <CoursesList>
               <Course name='course' src={mac} />
               <Course name='course' src={mac} />
               <Course name='course' src={mac} />
               <Course name='course' src={mac} />
            </CoursesList>
         </CoursesWrapper>
         <UploadCourseWrapper>
            <UploadDescription />
            <UploadButtonWrapper>
               <UploadCourse />
            </UploadButtonWrapper>
         </UploadCourseWrapper>
      </Container>

   </SectionWrapper>
);

export const CoursesSection = React.memo(Component);
