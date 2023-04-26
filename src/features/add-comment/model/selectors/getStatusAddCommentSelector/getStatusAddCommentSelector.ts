import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusAddCommentSelector = () => useAppSelector((state) => state.addComment);
