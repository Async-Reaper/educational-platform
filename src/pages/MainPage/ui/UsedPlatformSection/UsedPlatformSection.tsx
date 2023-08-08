import React, { useState } from 'react';
import { Container, Typography } from 'shared/ui';
import { Element } from 'react-scroll';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

interface IUsed {
  id: number;
  number: string;
  title: string;
  description: string;
}

const Component = () => {
  const [usedList] = useState<IUsed[]>([
    {
      id: 1,
      number: '01',
      title: 'Пройти тест',
      description: 'Ответьте на несколько вопросов и узнайте свою специализацию',
    },
    {
      id: 2,
      number: '02',
      title: 'Подбор курса',
      description: 'Выберите подходяший курс исходя из результатов теста',
    },
  ]);

  return (
     <Element name='additional'>
        <div className={cls.section__wrapper}>
           <Container>
              <div className={cls.used__inner}>
                 <div className={cls.title__wrapper}>
                    <Typography tag='h1' variant='h1'>
                       Как воспользоваться платформой
                    </Typography>
                 </div>
                 <div className={cls.used__list}>
                    {
                       usedList.map((usedItem) => (
                          <div className={cls.used__item}>
                             <div className={cls.bookmark}>
                                <Typography tag='b' variant='h3' color='white-bg'>
                                   {usedItem.number}
                                </Typography>
                             </div>
                             <div className={cls.used_title__wrapper}>
                                <Typography tag='h3' variant='h3' color='gray-primary'>
                                   {usedItem.title}
                                </Typography>
                             </div>
                             <div className={cls.description__wrapper}>
                                <ColoredIcon name='play_button_player' />
                                <Typography variant='body' color='gray-primary'>
                                   {usedItem.description}
                                </Typography>
                             </div>
                          </div>
                       ))
                    }
                 </div>
              </div>
           </Container>
        </div>
     </Element>
  );
};

export const UsedPlatformSection = React.memo(Component);
