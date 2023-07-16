import { StateSchema } from 'app/providers/store';

export const changeEmailIsSuccess = (state: StateSchema) => state.changeEmailForm?.isSuccess || false;
