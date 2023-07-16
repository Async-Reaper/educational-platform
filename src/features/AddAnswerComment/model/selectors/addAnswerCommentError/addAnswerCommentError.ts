import { StateSchema } from 'app/providers/store';

export const addAnswerCommentError = (state: StateSchema) => state.addAnswerCommentForm?.error || '';
