import React from 'react';
import {ColoredIcon} from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.questions__icons}>
      <ColoredIcon className={cls.message_3_d} name='message_3_d' width={155} height={150} />
      <ColoredIcon className={cls.arrow_to_questions} name='arrow_to_questions' width={165} height={55} />
      <ColoredIcon className={cls.questions_3_d} name='questions_3_d' width={202} height={138} />
      <ColoredIcon className={cls.arrow_to_cube} name='arrow_to_cube' width={209} height={148} />
      <ColoredIcon className={cls.cube_3_d} name='cube_3_d' width={256} height={196} />
      <ColoredIcon className={cls.middle_pillar} name='middle_pillar' width={300} height={173} />
      <ColoredIcon className={cls.big_pillar} name='big_pillar' width={322} height={186} />
      <ColoredIcon className={cls.small_pillar} name='small_pillar' width={246} height={142} />
      <ColoredIcon className={cls.mesh} name='mesh' width={442} height={505} />
   </div>
);

export const QuestionsIcons = React.memo(Component);
