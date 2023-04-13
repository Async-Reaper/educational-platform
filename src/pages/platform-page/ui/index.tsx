import React, { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { CoursesList } from 'widgets/courses-list';
import { Loader } from '../../../shared/ui';

const Component = () => {
  useEffect(() => {
    localStorage.setItem('type_learn', '');
  }, []);
  return (
     <Suspense fallback={<Loader />}>
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
};

export default Component;
