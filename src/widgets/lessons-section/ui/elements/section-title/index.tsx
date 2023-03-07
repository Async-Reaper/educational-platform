import React from 'react';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.lessons__sectionTitle}>
      <h1>
         <span>Первые шаги</span>
         {' '}
         к успеху!
      </h1>
   </div>
);

export const SectionTitle = React.memo(Component);
