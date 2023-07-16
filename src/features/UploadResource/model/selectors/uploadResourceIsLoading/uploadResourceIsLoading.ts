import { StateSchema } from 'app/providers/store';

export const uploadResourceIsLoading = (state: StateSchema) => state.uploadResourceForm?.isLoading || false;
