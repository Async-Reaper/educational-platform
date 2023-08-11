import './styles/index.scss';
import { classNames } from 'shared/libs/helpers/classNames';
import { AppRouter } from 'app/providers';
import { Suspense } from 'react';
import { LoaderPage } from 'shared/ui';

function App() {
  return (
     <div
       className={classNames('', ['theme'], { hovered: false })}
       data-testid='app'
     >
        <Suspense fallback={<LoaderPage />}>
           <AppRouter />
        </Suspense>
     </div>
  );
}

export default App;
