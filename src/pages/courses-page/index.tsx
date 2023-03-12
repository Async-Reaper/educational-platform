import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import cls from 'pages/platform-page/ui/styles.module.scss';

const Component = () => (
   <div className='page-platform'>
      <div>
         <Sidebar />
      </div>
      <div className={cls.content_wrapper}>
         courses-list-page
      </div>
   </div>
);

export const CoursesPage = Component;
