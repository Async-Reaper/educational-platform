import { StateSchema } from 'app/providers/store';

export const authIsSuccess = (state: StateSchema) => state.authForm?.isSuccess || false;
