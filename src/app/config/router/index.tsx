import { type RouteProps } from 'react-router-dom';
import { MainPage, PlatformPage } from 'pages';

export enum AppRoutes {
  MAIN = 'MAIN',
  PLATFORM = 'PLATFORM',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PLATFORM]: '/platform',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  [AppRoutes.PLATFORM]: {
    path: RoutePath.PLATFORM,
    element: <PlatformPage />,
  },
};
