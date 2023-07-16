import { StateSchema } from 'app/providers/store';

export const deleteTopicErrors = (state: StateSchema) => state.deleteResourceForm?.error || '';
