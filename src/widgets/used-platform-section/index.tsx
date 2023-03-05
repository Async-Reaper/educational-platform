import React from 'react';
import { Button, Container, Typography } from 'shared/ui';
import { ColoredIcon, Icon } from 'shared/libs/icons';
import {
   Bookmark, DescriptionWrapper,
   ExaminationCourse, ExaminationTextItem, PayIcons,
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
                     <UsedTitle text='Проверка и подбор курса' />
                  </UsedTitleWrapper>
                  <ExaminationCourse />
               </UsedItem>
               <UsedItem>
                  <Bookmark number='02' />
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
                  <Button variant='l' background='white-bg' border>
                     <Typography tag='span' variant='h3' color='violet-primary'>
                        Поехали
                     </Typography>
                     <Icon name='arrow_rounded' size={48} />
                  </Button>
               </UsedItem>
               <UsedItem>
                  <Bookmark number='03' />
                  <UsedTitleWrapper>
                     <UsedTitle text='Проверка и подбор курса' />
                  </UsedTitleWrapper>
                  <DescriptionWrapper>
                     <ExaminationTextItem text={
                        `Выберите удобный способ онлайн-оплаты 
                        и не беспокойтесь: соединение защищено!`
                     }
                     />
                  </DescriptionWrapper>
                  <PayIcons />
               </UsedItem>
            </UsedList>
         </UsedInner>
      </Container>
   </SectionWrapper>
);

export const UsedPlatformSection = React.memo(Component);
