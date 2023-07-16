import {StateSchema} from "app/providers/store";

export const coursesIsLoading = (state: StateSchema) => state.courses.isLoading || false;
