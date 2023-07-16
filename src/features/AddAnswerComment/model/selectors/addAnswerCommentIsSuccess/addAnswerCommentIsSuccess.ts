import { StateSchema } from 'app/providers/store';

export const addAnswerCommentIsSuccess = (state: StateSchema) => state.addAnswerCommentForm?.isSuccess || false;
