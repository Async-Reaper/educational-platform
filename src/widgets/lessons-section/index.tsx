import React from 'react';
import { Container } from 'shared/ui';
import { Lesson } from 'entities';
import { Player } from 'features';
import { LessonsInner } from 'widgets/lessons-section/ui/wrappers/lessons-inner';
import {
  LessonsAdditional,
  LessonsList,
  LessonsWrapper,
  PlayerBenefits,
  PlayerWrapper,
  SectionTitle,
  TopIcon,
  VideoLessonsWrapper,
  VideoTitle,
} from './ui';

const Component = () => (
   <LessonsWrapper>
      <Container>
         <LessonsInner>
            <TopIcon />
            <SectionTitle />
            <VideoTitle />
            <VideoLessonsWrapper>
               <PlayerWrapper>
                  <Player />
                  <PlayerBenefits />
               </PlayerWrapper>
               <LessonsList>
                  <Lesson />
                  <Lesson />
                  <Lesson />
                  <LessonsAdditional />
               </LessonsList>
            </VideoLessonsWrapper>
         </LessonsInner>
      </Container>
   </LessonsWrapper>
);

export const LessonsSection = React.memo(Component);
