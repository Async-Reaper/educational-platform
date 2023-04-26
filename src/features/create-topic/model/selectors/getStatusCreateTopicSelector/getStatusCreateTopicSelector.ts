import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusCreateTopicSelector = () => useAppSelector((state) => state.createTopic);
