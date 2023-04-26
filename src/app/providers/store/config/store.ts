import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/protocols/api/api';
import { CombinedState, Reducer } from 'redux';
import { userReducer } from 'entities/user';
import { requestReducer } from 'shared/libs/slices';
import { coursesReducer } from 'widgets/courses-list';
import { courseReducer } from 'entities/course/';
import { topicReducer } from 'entities/topic/';
import { authReducer } from 'features/auth';
import { commentsReducer } from 'entities/comments';
import { createTopicReducer } from 'features/create-topic';
import { deleteTopicReducer } from 'features/delete-topic';
import { addAnswerCommentReducer } from 'features/add-answer-comment';
import { addCommentReducer } from 'features/add-comment';
import { addLinkReducer } from 'features/add-link';
import { askQuestionsReducer } from 'features/ask-questions';
import { changeEmailReducer } from 'features/change-email';
import { changePasswordReducer } from 'features/change-password';
import { logoutReducer } from 'features/logout';
import { uploadResourceReducer } from 'features/upload-resource';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    auth: authReducer,
    user: userReducer,
    request: requestReducer,
    courses: coursesReducer,
    course: courseReducer,
    topic: topicReducer,
    comments: commentsReducer,

    // Async reducers for topic
    createTopic: createTopicReducer,
    deleteTopic: deleteTopicReducer,

    // Async reducers for comments
    addComment: addCommentReducer,
    addAnswerComment: addAnswerCommentReducer,
    askQuestions: askQuestionsReducer,

    // Async reducers for resource
    addLink: addLinkReducer,
    deleteResource: deleteTopicReducer,
    uploadResource: uploadResourceReducer,

    // Async reducers for user
    changeEmail: changeEmailReducer,
    changePassword: changePasswordReducer,
    logout: logoutReducer,
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
