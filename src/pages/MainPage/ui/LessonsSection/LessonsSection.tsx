import React from 'react';
import { Container, Typography } from 'shared/ui';
import { Element } from 'react-scroll';
import { ColoredIcon } from 'shared/libs/icons';

import { LessonItem } from './LessonItem';
import { Player } from './Player';
import cls from './styles.module.scss';
import { ILessonItem } from './types';

const Component = () => {
  const lessons: ILessonItem[] = [
    {
      name: 'Как повысить эффективность?',
      link: 'https://www.youtube.com/watch?v=Jvsgfb7ZEdQ',
    },
    {
      name: '22 совета продуктивности',
      link: 'https://www.youtube.com/watch?v=edpN-WbBBiU',
    },
    {
      name: 'Топ 10 профессий 2023',
      link: 'https://www.youtube.com/watch?v=FC2KljkhvKY',
    },
  ];
  return (
     <Element name='lesson'>
        <div className={cls.lessons__wrapper}>
           <Container>
              <div className={cls.lessons__inner}>
                 <div className={cls.top_icon}>
                    <ColoredIcon name='line' width={64} height={4} />
                 </div>
                 <div className={cls.lessons__sectionTitle}>
                    <h1>
                       <span>Первые шаги</span>
                       {' '}
                       к успеху!
                    </h1>
                 </div>
                 <div className={cls.video__title}>
                    <Typography tag='h2' variant='h2' color='gray-primary'>
                       Первый шаг к успеху - эффективность!
                    </Typography>
                 </div>
                 <div className={cls.video_lessons__wrapper}>
                    <div className={cls.player__wrapper}>
                       <Player />
                       <div className={cls.player__benefits}>
                          <ColoredIcon name='devices' color='violet-primary' width={60} height={46} />
                          <Typography tag='span' variant='h3' color='gray-primary'>
                             Удобно смотреть c любого устройства
                          </Typography>
                       </div>
                    </div>
                    <div className={cls.lessons__list}>
                       {
                            lessons.map((lesson) => <LessonItem lesson={lesson} />)
                       }
                    </div>
                 </div>
              </div>
           </Container>
        </div>
     </Element>
  );
};

export const LessonsSection = React.memo(Component);
