import { StateSchema } from 'app/providers/store';

export const authErrors = (state: StateSchema) => state.authForm?.error || '';
