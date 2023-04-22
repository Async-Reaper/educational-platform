import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getAllCommentsSelector = () => useAppSelector((state) => state.comments);
