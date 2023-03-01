import React from 'react';
import { Container } from 'shared/ui';
import { LinkSection } from 'widgets/top-section/ui/elements/link-section';
import cls from './styles.module.scss';
import {
  BottomIcon,
  ButtonsGroup, ContentWrapper, ImageBG, TextContent, TopSectionWrapper,
} from './ui';

const Component = () => (
   <div className={cls.top__section}>
      <Container>
         <TopSectionWrapper>
            <ContentWrapper>
               <TextContent />
               <ButtonsGroup />
            </ContentWrapper>
            <ImageBG />
         </TopSectionWrapper>
         <LinkSection />
      </Container>
      <BottomIcon />
   </div>
);

export const TopSection = React.memo(Component);
