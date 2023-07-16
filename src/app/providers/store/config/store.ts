import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/protocols/api/api';
import { CombinedState, Reducer } from 'redux';
import { userReducer } from 'entities/User';
import { coursesReducer } from 'widgets/CoursesList';
import { courseReducer } from 'entities/Course/';
import { topicReducer } from 'entities/Topic/';
import { commentsReducer } from 'entities/Comments';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    courses: coursesReducer,
    course: courseReducer,
    topic: topicReducer,
    comments: commentsReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
