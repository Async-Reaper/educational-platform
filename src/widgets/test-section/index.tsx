import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import { Container } from 'shared/ui';
import {
  ContentDescription,
  ContentTitle,
  IconsTitle,
  TestBtnWrapper,
  ContentWrapper,
  IconsWrapper,
  TestInner,
  TestWrapper, IconsInner, Icons,
} from 'widgets/test-section/ui';
import { OpenTestBtn } from 'features';
import {Element} from "react-scroll";

const Component = () => (
    <Element name={'test'}>
       <TestWrapper>
          <Container>
             <TestInner>
                <IconsWrapper>
                   <IconsTitle />
                   <IconsInner>
                      <Icons />
                   </IconsInner>
                </IconsWrapper>
                <ContentWrapper>
                   <ContentTitle />
                   <ContentDescription />
                   <TestBtnWrapper>
                      <OpenTestBtn />
                   </TestBtnWrapper>
                </ContentWrapper>
             </TestInner>
          </Container>
       </TestWrapper>
    </Element>
);

export const TestSection = React.memo(Component);
