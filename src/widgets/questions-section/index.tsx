import React from 'react';
import {Container} from 'shared/ui';
import {
    Description,
    DescriptionWrapper,
    QuestionsContent,
    QuestionsIcons,
    QuestionsInner,
    SectionWrapper,
    Title,
    TitleWrapper,
} from 'widgets/questions-section/ui';
import {AskQuestions} from 'features';

const Component = () => (
   <SectionWrapper>
      <Container>
         <QuestionsInner>
            <QuestionsContent>
               <TitleWrapper>
                  <Title />
               </TitleWrapper>
               <DescriptionWrapper>
                  <Description />
               </DescriptionWrapper>
               <AskQuestions />
            </QuestionsContent>
            <QuestionsIcons />
         </QuestionsInner>
      </Container>
   </SectionWrapper>
);

export const QuestionsSection = React.memo(Component);
