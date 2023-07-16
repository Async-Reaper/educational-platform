import { StateSchema } from 'app/providers/store';

export const uploadResourceIsSuccess = (state: StateSchema) => state.uploadResourceForm?.isSuccess || false;
