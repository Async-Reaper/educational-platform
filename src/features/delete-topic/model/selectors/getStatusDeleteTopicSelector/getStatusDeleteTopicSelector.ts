import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusDeleteTopicSelector = () => useAppSelector((state) => state.deleteTopic);
