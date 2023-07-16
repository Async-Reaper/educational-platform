import { StateSchema } from 'app/providers/store';

export const addLinkIsLoading = (state: StateSchema) => state.addLinkForm?.isLoading || false;
