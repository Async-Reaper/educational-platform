import { StateSchema } from 'app/providers/store';

export const addCommentError = (state: StateSchema) => state.addCommentForm?.error || '';
