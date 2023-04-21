import './styles/index.scss';
import { classNames } from 'shared/libs/helpers/classNames';
import { AppRouter, MainLayout } from 'app/providers';
import { Suspense } from 'react';
import { LoaderPage } from 'shared/ui';

function App() {
  return (
     <div className={classNames('', ['theme'], { hovered: false })}>
        <Suspense fallback={<LoaderPage />}>
           <MainLayout>
              <AppRouter />
           </MainLayout>
        </Suspense>
     </div>
  );
}

export default App;
