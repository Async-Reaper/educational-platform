export {
  commentsActions, commentsReducer,
} from './model/slice/commentsSlice';

export {
  getAllComments,
} from './model/api/getAllComments';

export {
  CommentType,
  CommentSchema,
  AnswerType,
} from './model/types';

export * from './model/selectors';
