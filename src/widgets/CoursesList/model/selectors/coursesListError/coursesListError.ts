import { StateSchema } from 'app/providers/store';

export const coursesListError = (state: StateSchema) => state.courses.error || '';
