import React, { Suspense } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { CoursesList } from 'widgets/courses-list';

const Component = () => (
   <Suspense fallback={<div>Loading...</div>}>
      <div className='page_platform'>
         <div>
            <Sidebar />
         </div>
         <div className='page_platform__content'>
            <CoursesList />
         </div>
      </div>
   </Suspense>
);

export default Component;
