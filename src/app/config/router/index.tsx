import { type RouteProps } from 'react-router-dom';
import {
  CoursePage, MainPage, PlatformPage, PrivateCabinet, TopicPage,
} from 'pages';

export enum AppRoutes {
  MAIN = 'MAIN',
  PLATFORM = 'PLATFORM',
  PLATFORM_COURSE = 'PLATFORM_COURSE',
  PRIVATE_CABINET = 'PRIVATE_CABINET',
  TOPIC = 'TOPIC',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PLATFORM]: '/platform',
  [AppRoutes.PRIVATE_CABINET]: '/private-cabinet',
  [AppRoutes.PLATFORM_COURSE]: '/course/:id',
  [AppRoutes.TOPIC]: '/course/:id/topic/:id',
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
  [AppRoutes.PRIVATE_CABINET]: {
    path: RoutePath.PRIVATE_CABINET,
    element: <PrivateCabinet />,
  },
  [AppRoutes.PLATFORM_COURSE]: {
    path: RoutePath.PLATFORM_COURSE,
    element: <CoursePage />,
  },
  [AppRoutes.TOPIC]: {
    path: RoutePath.TOPIC,
    element: <TopicPage />,
  },
};
