import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.page_wrapper}>
      <div>
         <Sidebar />
      </div>
      <div className={cls.content_wrapper} />
   </div>
);

export const PlatformPage = Component;
