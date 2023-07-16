import { StateSchema } from 'app/providers/store';

export const addCommentIsLoading = (state: StateSchema) => state.addCommentForm?.isLoading || false;
