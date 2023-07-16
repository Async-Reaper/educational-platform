import React, { useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { CoursesList } from 'widgets/CoursesList';

const PlatformPage = () => {
  useEffect(() => {
    localStorage.setItem('type_learn', '');
  }, []);
  return (
     <div className='page_platform'>
        <div>
           <Sidebar />
        </div>
        <div className='page_platform__content'>
           <CoursesList />
        </div>
     </div>
  );
};

export default PlatformPage;
