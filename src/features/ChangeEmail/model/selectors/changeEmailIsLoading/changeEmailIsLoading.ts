import { StateSchema } from 'app/providers/store';

export const changeEmailIsLoading = (state: StateSchema) => state.changeEmailForm?.isLoading || false;
