import './styles/index.scss';
import { classNames } from 'shared/libs/helpers/classNames';
import { AppRouter, MainLayout, StoreProvider } from 'app/providers';
import { Suspense } from 'react';
import { setupStore } from 'app/store';
import { Provider } from 'react-redux';

function App() {
  const store = setupStore();
  return (
     <div className={classNames('', ['theme'], { hovered: false })}>
        <Suspense fallback={<>Loading ...</>}>
           <Provider store={store}>
              <MainLayout>
                 <AppRouter />
              </MainLayout>
           </Provider>
        </Suspense>
     </div>
  );
}

export default App;
