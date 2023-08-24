import {
   AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { CoursesSchema } from 'widgets/CoursesList';
import { CourseSchema } from 'entities/Course';
import { TopicSchema } from 'entities/Topic';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CommentSchema } from 'entities/Comments';
import { CreateTopicSchema } from 'features/CreateTopic';
import { DeleteTopicSchema } from 'features/DeleteTopic';
import { AnswerCommentSchema } from 'features/AddAnswerComment';
import { AddCommentSchema } from 'features/AddComment';
import { AddLinkSchema } from 'features/AddLink';
import { AskQuestionSchema } from 'features/AskQuestions';
import { ChangeEmailSchema } from 'features/ChangeEmail';
import { ChangePasswordSchema } from 'features/ChangePassword';
import { LogoutSchema } from 'features/Logout';
import { DeleteResourceSchema } from 'features/DeleteResource';
import { UploadResourceSchema } from 'features/UploadResource';

export interface StateSchema {
   user: UserSchema,
   courses: CoursesSchema,
   course: CourseSchema,
   topic: TopicSchema,
   comments: CommentSchema,

   // topic
   authForm?: AuthSchema,
   createTopicForm?: CreateTopicSchema,
   deleteTopicForm?: DeleteTopicSchema,

   // comment
   addCommentForm?: AddCommentSchema,
   addAnswerCommentForm?: AnswerCommentSchema,
   askQuestionsForm?: AskQuestionSchema,

   // resources
   addLinkForm?: AddLinkSchema
   deleteResourceForm?: DeleteResourceSchema,
   uploadResourceForm?: UploadResourceSchema,

   // user
   changeEmailForm?: ChangeEmailSchema,
   changePasswordForm?: ChangePasswordSchema,
   logoutForm?: LogoutSchema
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
