export { DeleteTopicModal } from './ui/DeleteTopicModal/DeleteTopicModal';

export {
   deleteTopic,
} from './model/api/deleteTopic';

export {
   deleteTopicActions,
   deleteTopicReducer,
} from './model/slice/deleteTopicSlice';

export {
   DeleteTopicSchema,
} from './model/types';

export * from './model/selectors';
