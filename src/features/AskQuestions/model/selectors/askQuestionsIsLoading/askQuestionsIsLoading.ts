import { StateSchema } from 'app/providers/store';

export const askQuestionsIsLoading = (state: StateSchema) => state.askQuestionsForm?.isLoading || false;
