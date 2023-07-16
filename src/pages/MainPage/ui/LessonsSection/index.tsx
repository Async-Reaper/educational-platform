import React from 'react';
import { Container } from 'shared/ui';
import { Element } from 'react-scroll';
import { lessons } from './model/lessons';
import {
  LessonsInner,
  Player,
  Lesson,
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
                  </LessonsList>
               </VideoLessonsWrapper>
            </LessonsInner>
         </Container>
      </LessonsWrapper>
   </Element>
);

export const LessonsSection = React.memo(Component);
