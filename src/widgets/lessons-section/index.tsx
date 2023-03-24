import React from 'react';
import { Container } from 'shared/ui';
import { Lesson } from 'entities';
import { LessonsInner } from 'widgets/lessons-section/ui/wrappers/lessons-inner';
import { lessons } from 'widgets/lessons-section/model/lessons';
import { Player } from 'widgets/lessons-section/ui/elements/player';
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
                  {
                        lessons.map((lesson) => <Lesson lesson={lesson} />)
                     }
                  <LessonsAdditional />
               </LessonsList>
            </VideoLessonsWrapper>
         </LessonsInner>
      </Container>
   </LessonsWrapper>
);

export const LessonsSection = React.memo(Component);
