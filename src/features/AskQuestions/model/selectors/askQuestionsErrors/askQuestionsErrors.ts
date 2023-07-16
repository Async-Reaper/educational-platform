import { StateSchema } from 'app/providers/store';

export const askQuestionsErrors = (state: StateSchema) => state.askQuestionsForm?.error || '';
