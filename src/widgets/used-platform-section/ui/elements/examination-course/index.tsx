import React from 'react';
import { ExaminationTextItem } from '../examination-text-item';
import cls from './styles.module.scss';

const Component = () => {
  const examinationItemText = [
    'Ответьте на несколько вопросов и вставьте в специальное '
        + 'окно текст письма о назначении тестов. ',
    'Наш алгоритм определит, действительно ли у вас Talent Q, чтобы вы зря не тратили деньги. '
        + 'Затем система сформирует необходимый курс и укажет цену.',
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
