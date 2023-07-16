import { StateSchema } from 'app/providers/store';

export const addAnswerCommentIsLoading = (state: StateSchema) => state.addAnswerCommentForm?.isLoading || false;
