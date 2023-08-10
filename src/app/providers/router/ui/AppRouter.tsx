import React, {
  ReactNode, Suspense, useEffect, useState,
} from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { LoaderPage } from 'shared/ui';
import { routeConfig } from 'shared/config/routeConfig';
import { Sidebar } from 'widgets/Sidebar';
import { useResize } from 'shared/hooks/useResize/useResize';
import { HeaderPlatformPage } from 'widgets/Header';

const AppRouter = () => {
  const [element, setElement] = useState<ReactNode>(<Sidebar />);
  const { width } = useResize();

  useEffect(() => {
    if (width < 700) {
      setElement(<HeaderPlatformPage />);
    } else {
      setElement(<Sidebar />);
    }
  }, [width, setElement]);

  const renderWithWrapper = React.useCallback((route: RouteProps) => {
    const elementWithSidebar = (
       <Suspense fallback={<LoaderPage />}>
          {element}
          <div className='page_platform__content'>
             {route.element}
          </div>
       </Suspense>
    );

    const elementNonSidebar = (
       <Suspense fallback={<LoaderPage />}>
          {route.element}
       </Suspense>
    );

    return (
       <Route
         key={route.path}
         path={route.path}
         element={(
            <RequireAuth>
               {
                   (route.path === '/' || route.path === '/test')
                     ? elementNonSidebar
                     : elementWithSidebar
               }
            </RequireAuth>
)}
       />
    );
  }, [element]);

  return (
     <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
     </Routes>
  );
};

export default React.memo(AppRouter);
