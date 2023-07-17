import React, { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { LoaderPage } from 'shared/ui';
import { routeConfig } from 'shared/config/routeConfig';
import { Sidebar } from 'widgets/Sidebar';

const AppRouter = () => {
  const renderWithWrapper = React.useCallback((route: RouteProps) => {
    const elementWithSidebar = (
       <Suspense fallback={<LoaderPage />}>
          <div className='page_platform'>
             <Sidebar />
             <div className='page_platform__content'>
                {route.element}
             </div>
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
  }, []);

  return (
     <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
     </Routes>
  );
};

export default React.memo(AppRouter);
