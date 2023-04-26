import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusAddAnswerSelector = () => useAppSelector((state) => state.addAnswerComment);
