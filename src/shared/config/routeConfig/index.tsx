import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PlatformPage } from 'pages/PlatformPage';
import { PrivateCabinet } from 'pages/PrivateCabinet';
import { CoursePage } from 'pages/CoursePage';
import { TopicPage } from 'pages/TopicPage';
import { TestPage } from 'pages/TestPage';
import { GroupedCoursePage } from 'pages/GroupedCoursePage';


// interface Params {
//   path: string;
//   element: ReactNode;
//  auth: boolean;
//   role: 'mentee' | 'mentor' | 'all'
// }

export enum AppRoutes {
  MAIN = 'MAIN',
  PLATFORM = 'PLATFORM',
  PLATFORM_COURSE = 'PLATFORM_COURSE',
  PRIVATE_CABINET = 'PRIVATE_CABINET',
  TOPIC = 'TOPIC',
  GROUPED_COURSE = 'GROUPED_COURSE',
  TEST = 'TEST',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PLATFORM]: '/platform',
  [AppRoutes.PRIVATE_CABINET]: '/private-cabinet',
  [AppRoutes.PLATFORM_COURSE]: '/course/:id',
  [AppRoutes.TOPIC]: '/course/:id/topic/:id',
  [AppRoutes.GROUPED_COURSE]: '/course/grouped-course',
  [AppRoutes.TEST]: '/test',
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
  [AppRoutes.GROUPED_COURSE]: {
    path: RoutePath.GROUPED_COURSE,
    element: <GroupedCoursePage />,
  },
  [AppRoutes.TEST]: {
    path: RoutePath.TEST,
    element: <TestPage />,
  },
};
