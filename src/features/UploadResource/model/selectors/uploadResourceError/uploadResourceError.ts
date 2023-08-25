import { StateSchema } from 'app/providers/store';

export const uploadResourceError = (state: StateSchema) => state.uploadResourceForm?.error || '';
