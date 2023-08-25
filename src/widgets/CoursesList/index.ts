export { CoursesList } from './ui/CoursesList';

export {
   getAllCourse,
} from './model/api/getAllCourse';

export {
   coursesActions,
   coursesReducer,
} from './model/slice/coursesListSlice';

export type { CoursesType, CoursesSchema } from './model/types';

export * from './model/selectors';
