import React from 'react';
import { Button, Container, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import { useModal } from 'shared/hooks/useModal/useModal';
import { AskQuestionsModal } from 'features/AskQuestions';
import {
  Description,
  DescriptionWrapper,
  QuestionsContent,
  QuestionsIcons,
  QuestionsInner,
  SectionWrapper,
  Title,
  TitleWrapper,
} from './ui';

const Component = () => {
  const { isOpen, open, close } = useModal();

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
                 <Button variant='m' onClick={open}>
                    <Typography tag='span' variant='h3'>
                       Задать вопрос
                    </Typography>
                    <Icon name='questions' color='white-bg' size={47} />
                 </Button>
              </QuestionsContent>
              <QuestionsIcons />
           </QuestionsInner>
        </Container>
        {
             isOpen
             && (
             <AskQuestionsModal
               isOpen={isOpen}
               onClose={close}
             />
             )
         }
     </SectionWrapper>
  );
};

export const QuestionsSection = React.memo(Component);
