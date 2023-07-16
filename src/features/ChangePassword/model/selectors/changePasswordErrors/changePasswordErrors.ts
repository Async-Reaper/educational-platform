import { StateSchema } from 'app/providers/store';

export const changePasswordErrors = (state: StateSchema) => state.changePasswordForm?.error || '';
