import { StateSchema } from 'app/providers/store';

export const authData = (state: StateSchema) => state.authForm?.data;
