import { StateSchema } from 'app/providers/store';

export const changePasswordIsLoading = (state: StateSchema) => state.changePasswordForm?.isLoading || false;
