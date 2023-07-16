import { StateSchema } from 'app/providers/store';

export const courseIsLoading = (state: StateSchema) => state.course.isLoading || false;
