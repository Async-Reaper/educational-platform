import React from 'react';
import { ExaminationTextItem } from '../examination-text-item';
import cls from './styles.module.scss';

const Component = () => {
  const examinationItemText = [
    'Ответьте на несколько вопросов и узнайте свою специализацию ',
  ];
  return (
     <ul className={cls.examination__list}>
        {
                examinationItemText.map((item) => <ExaminationTextItem text={item} />)
            }
     </ul>
  );
};

export const ExaminationCourse = React.memo(Component);
