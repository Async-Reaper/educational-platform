export { AddCommentModal } from './ui/AddCommentModal/AddCommentModal';
export { addComment } from './model/api/addComment';

export {
  addCommentActions,
  addCommentReducer,
} from './model/slice/addCommentSlice';

export { AddCommentType, AddCommentSchema } from './model/types';
export * from './model/selectors';
