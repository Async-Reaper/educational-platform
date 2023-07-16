import React from 'react';
import { Container } from 'shared/ui';
import { Element } from 'react-scroll';
import {
  Bookmark, DescriptionWrapper, ExaminationCourse, ExaminationTextItem,
  SectionWrapper,
  Title,
  TitleWrapper,
  UsedInner,
  UsedItem,
  UsedList, UsedTitle, UsedTitleWrapper,
} from './ui';

const Component = () => (
   <Element name='additional'>
      <SectionWrapper>
         <Container>
            <UsedInner>
               <TitleWrapper>
                  <Title />
               </TitleWrapper>
               <UsedList>
                  <UsedItem>
                     <Bookmark number='01' />
                     <UsedTitleWrapper>
                        <UsedTitle text='Пройти тест' />
                     </UsedTitleWrapper>
                     <ExaminationCourse />
                  </UsedItem>
                  <UsedItem>
                     <Bookmark number='02' />
                     <UsedTitleWrapper>
                        <UsedTitle text='Подбор курса' />
                     </UsedTitleWrapper>
                     <DescriptionWrapper>
                        <ExaminationTextItem
                          text='Выберите подходяший курс исходя из результатов теста'
                        />
                     </DescriptionWrapper>
                  </UsedItem>
               </UsedList>
            </UsedInner>
         </Container>
      </SectionWrapper>
   </Element>
);

export const UsedPlatformSection = React.memo(Component);
