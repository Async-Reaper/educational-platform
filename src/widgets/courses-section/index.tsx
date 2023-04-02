import React, { useState } from 'react';
import { Container } from 'shared/ui';
import { SectionWrapper } from 'widgets/courses-section/ui/wrappers/section-wraperr';
import {
  CoursesListWrapper, CoursesWrapper, SectionTitle,
} from 'widgets/courses-section/ui';
import programming from './img/programming.png';
import webDesign from './img/web-design.png';
import secureInformation from './img/secure-information.png';
import Modeling from './img/3d-modeling.png';
import {CoursesList} from "widgets/courses-list";

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
              {/*<CoursesListWrapper>*/}
                 <CoursesList />
              {/*</CoursesListWrapper>*/}
           </CoursesWrapper>
        </Container>
     </SectionWrapper>
  );
};

export const CoursesSection = React.memo(Component);
