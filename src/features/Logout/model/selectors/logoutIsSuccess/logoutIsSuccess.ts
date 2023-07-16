import { StateSchema } from 'app/providers/store';

export const logoutIsSuccess = (state: StateSchema) => state.logoutForm?.isSuccess || false;
