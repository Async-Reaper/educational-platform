import { StateSchema } from 'app/providers/store';

export const topicIsLoading = (state: StateSchema) => state.topic.isLoading || false;
