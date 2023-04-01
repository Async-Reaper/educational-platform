import React, { useState } from 'react';
import {
  Button, Container, ModalWindow, Typography,
} from 'shared/ui';
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
import { AskQuestions } from 'features';
import { Icon } from 'shared/libs/icons';

const Component = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
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
                 <Button variant='m' onClick={() => setIsVisible(true)}>
                    <Typography tag='span' variant='h3'>
                       Задать вопрос
                    </Typography>
                    <Icon name='questions' color='white-bg' size={47} />
                 </Button>
              </QuestionsContent>
              <QuestionsIcons />
           </QuestionsInner>
        </Container>
        <ModalWindow isVisible={isVisible} setIsVisible={() => setIsVisible(!isVisible)}>
           <AskQuestions setVisible={setIsVisible} />
        </ModalWindow>
     </SectionWrapper>
  );
};

export const QuestionsSection = React.memo(Component);
