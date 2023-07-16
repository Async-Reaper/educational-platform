import { StateSchema } from 'app/providers/store';

export const createTopicIsSuccess = (state: StateSchema) => state.createTopicForm?.isSuccess || false;
