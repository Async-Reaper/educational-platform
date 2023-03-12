import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { User } from 'entities';
import { TheirCourses } from 'widgets';
import { UploadCourse } from 'features';

const Component = () => (
   <div className='page_platform'>
      <Sidebar />
      <div className='page_platform__content'>
         <User />
         <TheirCourses />
         <UploadCourse />
      </div>
   </div>
);

export const PrivateCabinet = Component;
