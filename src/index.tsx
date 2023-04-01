import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store';

const store = setupStore();

render(
   <BrowserRouter>
      <ErrorBoundary>
         <Provider store={store}>
            <App />
         </Provider>
      </ErrorBoundary>
   </BrowserRouter>,
   document.getElementById('root'),
);
