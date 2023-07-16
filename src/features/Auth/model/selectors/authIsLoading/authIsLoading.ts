import { StateSchema } from 'app/providers/store';

export const authIsLoading = (state: StateSchema) => state.authForm?.isLoading || false;
