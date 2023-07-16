import { StateSchema } from 'app/providers/store';

export const deleteResourceIsSuccess = (state: StateSchema) => state.deleteResourceForm?.isSuccess || false;
