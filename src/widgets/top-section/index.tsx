import React from 'react';
import { Container } from 'shared/ui';
import { LinkSection } from 'widgets/top-section/ui/elements/link-section';
import {
  BottomIcon,
  ButtonsGroup, ContentWrapper, ImageBG, TextContent, TopSectionWrapper, TopSectionBody,
} from './ui';

const Component = () => (
   <TopSectionWrapper>
      <Container>
         <TopSectionBody>
            <ContentWrapper>
               <TextContent />
               <ButtonsGroup />
            </ContentWrapper>
            <ImageBG />
         </TopSectionBody>
         <LinkSection />
      </Container>
      <BottomIcon />
   </TopSectionWrapper>
);

export const TopSection = React.memo(Component);
