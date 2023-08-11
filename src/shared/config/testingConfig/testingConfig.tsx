import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'app/providers';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { createReduxStore, StateSchema } from 'app/providers/store';

interface IOptions {
  route: string;
  initialState?: StateSchema
}

export const testingRender = (component: ReactNode | null, options: IOptions) => {
  const store = createReduxStore(options?.initialState);

  return render(
     <Provider store={store}>
        <MemoryRouter initialEntries={[options.route]}>
           <AppRouter />
           {component}
        </MemoryRouter>
     </Provider>,
  );
};
