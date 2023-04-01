import { lazy } from 'react';

export const MainPage = lazy(async () => import('./main-page'));
export { PlatformPage } from './platform-page';
export { CoursePage } from './course-page/ui';
export { PrivateCabinet } from './private-cabinet';
