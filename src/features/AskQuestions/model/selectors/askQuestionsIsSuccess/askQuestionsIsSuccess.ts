import { StateSchema } from 'app/providers/store';

export const askQuestionsIsSuccess = (state: StateSchema) => state.askQuestionsForm?.isSuccess || false;
