import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { RequestSlice } from 'shared/libs/slices/requestSlice/requestSlice';
import { CoursesSchema } from 'widgets/courses-list';
import { CourseSchema } from 'entities/course/model/types';
import { TopicSchema } from 'entities/topic/model/types';
import { UserSchema } from 'entities/user';
import { AuthSchema } from 'features/auth/model/types';
import { CommentSchema } from 'entities/comments/model/types';
import { CreateTopicSchema } from 'features/create-topic';
import { DeleteTopicSchema } from 'features/delete-topic';
import { AnswerCommentSchema } from 'features/add-answer-comment';
import { AddCommentSchema } from 'features/add-comment';
import { AddLinkSchema } from 'features/add-link';
import { AskQuestionSchema } from 'features/ask-questions';
import { ChangeEmailSchema } from 'features/change-email';
import { ChangePasswordSchema } from 'features/change-password';
import { LogoutSchema } from 'features/logout';
import { DeleteResourceSchema } from 'features/delete-resource';
import {UploadResourceSchema} from "features/upload-resource";

export interface StateSchema {
  auth: AuthSchema,
  user: UserSchema,
  request: RequestSlice,
  courses: CoursesSchema,
  course: CourseSchema,
  topic: TopicSchema,
  comments: CommentSchema,

  // topic
  createTopic: CreateTopicSchema,
  deleteTopic: DeleteTopicSchema,

  // comment
  addComment: AddCommentSchema,
  addAnswerComment: AnswerCommentSchema,
  askQuestions: AskQuestionSchema,

  // resources
  addLink: AddLinkSchema
  deleteResource: DeleteResourceSchema,
  uploadResource: UploadResourceSchema,

  // user
  changeEmail: ChangeEmailSchema,
  changePassword: ChangePasswordSchema,
  logout: LogoutSchema
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
