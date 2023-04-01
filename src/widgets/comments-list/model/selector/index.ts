import { useAppSelector } from 'shared/libs/hooks/useAppSelector';

export const getAllCommentsSelector = () => useAppSelector((state) => state.comments);
