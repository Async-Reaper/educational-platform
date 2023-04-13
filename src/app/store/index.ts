import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { requestReducer } from 'shared/libs/slices';
import { coursesReducer } from 'widgets/courses-list/model/slice';
import { courseReducer } from 'pages/course-page/model/slice';
import { commentsReducer } from 'widgets/comments-list/model/slice';
import { topicReducer } from '../../pages/topic-page/model/slice';

export const rootReducer = combineReducers({
  user: userReducer,
  request: requestReducer,
  courses: coursesReducer,
  course: courseReducer,
  topic: topicReducer,
  comments: commentsReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});
