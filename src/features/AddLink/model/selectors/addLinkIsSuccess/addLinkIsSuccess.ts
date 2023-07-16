import { StateSchema } from 'app/providers/store';

export const addLinkIsSuccess = (state: StateSchema) => state.addLinkForm?.isSuccess || false;
