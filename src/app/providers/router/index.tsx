import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CoursePage, MainPage, PlatformPage, PrivateCabinet, TopicPage,
} from 'pages';

function Component() {
  return (
     <Suspense fallback={<>Loading...</>}>
        <Routes>
           <Route path='/' element={<MainPage />} />
           <Route path='/platform' element={<PlatformPage />} />
           <Route path='/private-cabinet' element={<PrivateCabinet />} />
           <Route path='/course/:id' element={<CoursePage />} />
           <Route path='/course/:id/topic/:id' element={<TopicPage />} />
        </Routes>
     </Suspense>
  );
}

export const AppRouter = Component;
