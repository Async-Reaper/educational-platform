import { StateSchema } from 'app/providers/store';

export const addLinkErrors = (state: StateSchema) => state.addLinkForm?.error || '';
