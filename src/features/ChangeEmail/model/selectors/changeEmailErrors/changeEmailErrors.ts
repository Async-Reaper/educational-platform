import { StateSchema } from 'app/providers/store';

export const changeEmailErrors = (state: StateSchema) => state.changeEmailForm?.error || '';
