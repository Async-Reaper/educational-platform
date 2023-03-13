import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
) {
  const rootReducers = combineReducers({

  });

  const store = configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
