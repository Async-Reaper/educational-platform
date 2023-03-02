import React from 'react';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.course__bookmark} />
);

export const CourseBookmark = React.memo(Component);
