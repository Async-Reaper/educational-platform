import React, { useEffect } from 'react';
import { CoursesList } from 'widgets/CoursesList';

const PlatformPage = () => {
  useEffect(() => {
    localStorage.setItem('type_learn', '');
  }, []);
  return (
     <div>
        <CoursesList />
     </div>
  );
};

export default PlatformPage;
