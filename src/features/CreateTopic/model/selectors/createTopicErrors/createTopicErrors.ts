import { StateSchema } from 'app/providers/store';

export const createTopicErrors = (state: StateSchema) => state.createTopicForm?.error || '';
