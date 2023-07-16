import { StateSchema } from 'app/providers/store';

export const deleteResourceErrors = (state: StateSchema) => state.deleteResourceForm?.error || '';
