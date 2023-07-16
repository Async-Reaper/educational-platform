import { StateSchema } from 'app/providers/store';

export const logoutErrors = (state: StateSchema) => state.logoutForm?.error || '';
