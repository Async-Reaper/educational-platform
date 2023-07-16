import { StateSchema } from 'app/providers/store';

export const createTopicIsLoading = (state: StateSchema) => state.createTopicForm?.isLoading || false;
