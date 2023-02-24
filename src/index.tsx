import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/error-boundary';

render(
   <BrowserRouter>
      <ErrorBoundary>
         <App />
      </ErrorBoundary>
   </BrowserRouter>,
   document.getElementById('root'),
);
