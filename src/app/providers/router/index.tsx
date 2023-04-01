import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CoursePage, MainPage, PlatformPage, PrivateCabinet,
} from 'pages';

function Component() {
  return (
     <Suspense fallback={<>Loading...</>}>
        <Routes>
           <Route path='/' element={<MainPage />} />
           <Route path='/platform' element={<PlatformPage />} />
           <Route path='/private-cabinet' element={<PrivateCabinet />} />
           <Route path='/course/:id' element={<CoursePage />} />
        </Routes>
     </Suspense>
  );
}

export const AppRouter = Component;
