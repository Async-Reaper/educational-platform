import React from 'react';
import { Container } from 'shared/ui';
import { Social } from 'shared/ui/social';
import {
  FooterContent,
  FooterInner,
  LeftContent,
  PartContent,
  RightContent,
  SectionWrapper, SocialWrapper,
} from './ui';

const Component = () => (
   <SectionWrapper>
      <Container>
         <FooterInner>
            <FooterContent>
               <PartContent>
                  <LeftContent />
               </PartContent>
               <PartContent>
                  <RightContent />
               </PartContent>
            </FooterContent>
            <SocialWrapper>
               <Social />
            </SocialWrapper>
         </FooterInner>
      </Container>
   </SectionWrapper>
);

export const Footer = React.memo(Component);
