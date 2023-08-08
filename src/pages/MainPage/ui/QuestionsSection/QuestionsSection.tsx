import React from 'react';
import { Button, Container, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import { useModal } from 'shared/hooks/useModal/useModal';
import { AskQuestionsModal } from 'features/AskQuestions';

import cls from './styles.module.scss';
import { QuestionsIcons } from './Icons';

const Component = () => {
  const { isOpen, open, close } = useModal();

  return (
     <div className={cls.section__wrapper}>
        <Container>
           <div className={cls.questions__inner}>
              <div className={cls.questions__content}>
                 <div className={cls.title__wrapper}>
                    <Typography tag='strong' variant='h1' uppercase color='violet-primary'>
                       возникли вопросы?
                    </Typography>
                 </div>
                 <div className={cls.description__wrapper}>
                    <Typography>
                       В данном разделе можно задать вопрос нашим экспертам.
                    </Typography>
                 </div>
                 <Button variant='m' onClick={open}>
                    <Typography tag='span' variant='h3'>
                       Задать вопрос
                    </Typography>
                    <Icon name='questions' color='white-bg' size={47} />
                 </Button>
              </div>
              <QuestionsIcons />
           </div>
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
     </div>
  );
};

export const QuestionsSection = React.memo(Component);
