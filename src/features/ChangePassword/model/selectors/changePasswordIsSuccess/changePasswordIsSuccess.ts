import { StateSchema } from 'app/providers/store';

export const changePasswordIsSuccess = (state: StateSchema) => state.changePasswordForm?.isSuccess || false;
