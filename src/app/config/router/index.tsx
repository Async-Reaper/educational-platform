import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages';

export enum AppRoutes {
  MAIN = 'MAIN',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
};
