import { StateSchema } from 'app/providers/store';

export const courseErrors = (state: StateSchema) => state.course.error || '';
