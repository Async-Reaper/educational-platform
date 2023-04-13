import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/protocols/api/api';
import { CombinedState, Reducer } from 'redux';
import { userReducer } from 'entities/user';
import { requestReducer } from 'shared/libs/slices';
import { coursesReducer } from 'widgets/courses-list/model/slice';
import { courseReducer } from 'pages/course-page/model/slice';
import { topicReducer } from 'pages/topic-page/model/slice';
import { commentsReducer } from 'widgets/comments-list/model/slice';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    request: requestReducer,
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
