import { StateSchema } from 'app/providers/store';

export const deleteTopicIsSuccess = (state: StateSchema) => state.deleteResourceForm?.isSuccess || false;
