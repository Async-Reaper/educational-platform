import React, { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { RequireAuth } from 'app/providers/router/RequireAuth';
import { Loader } from 'shared/ui';
import { routeConfig } from 'shared/config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = React.useCallback((route: RouteProps) => {
    const element = (
       <Suspense fallback={<Loader />}>
          <div className='page-wrapper'>
             {route.element}
          </div>
       </Suspense>
    );
    return (
       <Route
         key={route.path}
         path={route.path}
         element={<RequireAuth>{element}</RequireAuth>}
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
