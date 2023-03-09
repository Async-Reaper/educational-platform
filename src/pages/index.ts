import { lazy } from 'react';

export const MainPage = lazy(async () => import('./main-page'));
export { PlatformPage } from './platform-page';
