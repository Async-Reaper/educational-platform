import { StateSchema } from 'app/providers/store';

export const userErrors = (state: StateSchema) => state.user.error || '';
