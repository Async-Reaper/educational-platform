import React from 'react';
import { Container } from 'shared/ui';
import { Element } from 'react-scroll';
import { LessonsInner } from 'pages/main-page/ui/lessons-section/ui/wrappers/lessons-inner';
import { Player } from 'pages/main-page/ui/lessons-section/ui/elements/player';
import { lessons } from 'pages/main-page/ui/lessons-section/model/lessons';
import { Lesson } from 'pages/main-page/ui/lessons-section/ui/elements/lesson/ui';
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
   <Element name='lesson'>
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
   </Element>
);

export const LessonsSection = React.memo(Component);
