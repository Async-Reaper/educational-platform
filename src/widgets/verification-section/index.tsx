import React from 'react';
import { Container } from 'shared/ui';
import { VerificationBtn } from 'features';
import {
  Description,
  Img,
  SectionWrapper,
  SubtitleWrapper,
  TitleWrapper,
  VerificationContent,
  VerificationInner,
  Title,
  Subtitle, DescriptionWrapper, TopIcons,
} from 'widgets/verification-section/ui';

const Component = () => (
   <SectionWrapper>
      <TopIcons />
      <Container>
         <VerificationInner>
            <Img />
            <VerificationContent>
               <TitleWrapper>
                  <Title />
               </TitleWrapper>
               <SubtitleWrapper>
                  <Subtitle />
               </SubtitleWrapper>
               <DescriptionWrapper>
                  <Description />
               </DescriptionWrapper>
               <VerificationBtn />
            </VerificationContent>
         </VerificationInner>
      </Container>
   </SectionWrapper>
);

export const VerificationSection = React.memo(Component);
