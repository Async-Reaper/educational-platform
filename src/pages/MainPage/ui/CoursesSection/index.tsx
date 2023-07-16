import React from 'react';
import { Container } from 'shared/ui';
import { CoursesList } from 'widgets/CoursesList';
import { CoursesWrapper, SectionTitle, SectionWrapper } from './ui';

const Component = () => (
   <SectionWrapper>
      <Container>
         <CoursesWrapper>
            <SectionTitle />
            <CoursesList />
         </CoursesWrapper>
      </Container>
   </SectionWrapper>
);

export const CoursesSection = React.memo(Component);
