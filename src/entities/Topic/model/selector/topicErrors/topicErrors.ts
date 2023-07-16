import { StateSchema } from 'app/providers/store';

export const topicErrors = (state: StateSchema) => state.topic.error || '';
