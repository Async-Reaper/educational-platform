import { StateSchema } from 'app/providers/store';

export const deleteTopicIsLoading = (state: StateSchema) => state.deleteResourceForm?.isLoading || false;
