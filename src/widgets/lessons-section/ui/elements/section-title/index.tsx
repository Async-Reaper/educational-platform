import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.lessons__sectionTitle}>
      <h1>
         <span>Talent Q:</span>
         {' '}
         6 шагов к успеху
      </h1>
   </div>
);

export const SectionTitle = React.memo(Component);
