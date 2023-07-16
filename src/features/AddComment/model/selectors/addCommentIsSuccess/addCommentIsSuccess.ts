import { StateSchema } from 'app/providers/store';

export const addCommentIsSuccess = (state: StateSchema) => state.addCommentForm?.isSuccess || false;
