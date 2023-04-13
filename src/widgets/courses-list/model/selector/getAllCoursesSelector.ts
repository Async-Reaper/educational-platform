import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getAllCoursesSelector = () => useAppSelector((state) => state.courses);
