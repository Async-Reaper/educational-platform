import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { RequestSlice } from 'shared/libs/slices/requestSlice/requestSlice';
import { CoursesSchema } from 'widgets/courses-list';
import { CourseSchema } from 'pages/course-page/model/types';
import { TopicSchema } from 'pages/topic-page/model/types';
import { CommentSchema } from 'widgets/comments-list';
import { UserSchema } from 'entities/user';

export interface StateSchema {
  user: UserSchema,
  request: RequestSlice,
  courses: CoursesSchema,
  course: CourseSchema,
  topic: TopicSchema,
  comments: CommentSchema,
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
