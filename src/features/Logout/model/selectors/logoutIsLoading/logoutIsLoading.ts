import { StateSchema } from 'app/providers/store';

export const logoutIsLoading = (state: StateSchema) => state.logoutForm?.isLoading || false;
