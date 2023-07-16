import { StateSchema } from 'app/providers/store';

export const commentsIsLoading = (state: StateSchema) => state.comments.isLoading || false;
