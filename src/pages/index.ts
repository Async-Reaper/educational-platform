import { lazy } from 'react';

export const MainPage = lazy(async () => import('./main-page'));
export { PlatformPage } from './platform-page';
export { UserPage } from './user-page';
export { CoursesPage } from './courses-page';
export { CoursePage } from './course-page/ui';
export { PrivateCabinet } from './private-cabinet';
export { SignupPage } from './signup-page';
