import { StateSchema } from 'app/providers/store';

export const deleteResourceIsLoading = (state: StateSchema) => state.deleteResourceForm?.isLoading || false;
