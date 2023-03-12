import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { CoursesList } from 'widgets/courses-list';

const Component = () => (
   <div className='page_platform'>
      <div>
         <Sidebar />
      </div>
      <div className='page_platform__content'>
         <CoursesList />
      </div>
   </div>
);

export const PlatformPage = Component;
