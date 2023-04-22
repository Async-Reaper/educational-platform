import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getCourseSelector = () => useAppSelector((state) => state.course);
