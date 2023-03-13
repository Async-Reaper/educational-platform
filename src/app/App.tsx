import './styles/index.scss';
import { classNames } from 'shared/libs/helpers/classNames';
import { AppRouter, MainLayout, StoreProvider } from 'app/providers';
import { Suspense } from 'react';

function App() {

  return (
     <div className={classNames('', ['theme'], { hovered: false })}>
        <Suspense fallback={<>Loading ...</>}>
         <StoreProvider>
           <MainLayout>
              <AppRouter />
           </MainLayout>
         </StoreProvider>
        </Suspense>
     </div>
  );
}

export default App;
