import { StateSchema } from 'app/providers/store';

export const userIsLoading = (state: StateSchema) => state.user.isLoading || false;
