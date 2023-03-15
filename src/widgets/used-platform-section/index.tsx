import React from 'react';
import { Button, Container, Typography } from 'shared/ui';
import { ColoredIcon, Icon } from 'shared/libs/icons';
import {
  Bookmark, DescriptionWrapper,
  ExaminationCourse, ExaminationTextItem, PayIcons, RunSignup,
  SectionWrapper, SignupItemIcons,
  Title,
  TitleWrapper,
  UsedInner,
  UsedItem,
  UsedList,
  UsedTitle,
  UsedTitleWrapper,
} from 'widgets/used-platform-section/ui';

const Component = () => (
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
                     <UsedTitle text='Регистрация в системе' />
                  </UsedTitleWrapper>
                  <DescriptionWrapper>
                     <Typography variant='body' color='gray-primary'>
                        Войдите на платформу, используя код из СМС.
                        Процедура займёт не больше минуты.
                     </Typography>
                  </DescriptionWrapper>
                  <SignupItemIcons />
                  <RunSignup />
               </UsedItem>
               <UsedItem>
                  <Bookmark number='02' />
                  <UsedTitleWrapper>
                     <UsedTitle text='Пройти тест' />
                  </UsedTitleWrapper>
                  <ExaminationCourse />
               </UsedItem>
               <UsedItem>
                  <Bookmark number='03' />
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
);

export const UsedPlatformSection = React.memo(Component);
