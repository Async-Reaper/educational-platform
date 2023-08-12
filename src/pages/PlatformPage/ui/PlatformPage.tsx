import React, { useEffect } from 'react';
import { CoursesList } from 'widgets/CoursesList';

const PlatformPage = () => {
  useEffect(() => {
    localStorage.setItem('type_learn', '');
  }, []);
  return (
     <div data-testid='platform-page'>
        <CoursesList />
     </div>
  );
};

export default PlatformPage;
