import React from 'react';
import { Container } from 'shared/ui';
import { CoursesWrapper, SectionTitle, SectionWrapper } from 'pages/main-page/ui/courses-section/ui';
import { CoursesList } from 'widgets/courses-list';

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
