import { StateSchema } from 'app/providers/store';

export const commentsError = (state: StateSchema) => state.comments.error || '';
