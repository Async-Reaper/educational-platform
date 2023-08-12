import React, { ReactNode, useEffect, useState } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { routeConfig } from 'shared/config/routeConfig';
import { Sidebar } from 'widgets/Sidebar';
import { useResize } from 'shared/hooks/useResize/useResize';
import { HeaderPlatformPage } from 'widgets/Header';
import { MainLayout } from 'app/providers';

const AppRouter = () => {
  const [element, setElement] = useState<ReactNode>(<Sidebar />);
  const { width } = useResize();

  const renderWithWrapper = React.useCallback((route: RouteProps) => {
    const elementWithSidebar = (
       <MainLayout>
          {element}
          <div className='page_platform__content'>
             {route.element}
          </div>
       </MainLayout>
    );

    const elementNonSidebar = (
       <>
          {route.element}
       </>
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

  useEffect(() => {
    if (width < 700) {
      setElement(<HeaderPlatformPage />);
    } else {
      setElement(<Sidebar />);
    }
  }, [width, setElement]);

  return (
     <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
     </Routes>
  );
};

export default React.memo(AppRouter);
