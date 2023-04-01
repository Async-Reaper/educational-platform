import { useAppSelector } from 'shared/libs/hooks/useAppSelector';

export const getCourseSelector = () => useAppSelector((state) => state.course);
