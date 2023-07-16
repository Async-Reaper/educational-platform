import { StateSchema } from 'app/providers/store';

export const changeEmailData = (state: StateSchema) => state.changeEmailForm?.email || '';
