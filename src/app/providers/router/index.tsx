import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/config';

function Component() {
  return (
     <Suspense fallback={<>Loading...</>}>
        <Routes>
           {
          Object.values(routeConfig).map(({ path, element }) => (
             <Route key={path} path={path} element={element} />
  			 ))
        }
        </Routes>
     </Suspense>
  );
}

export const AppRouter = Component;
