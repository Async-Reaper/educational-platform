import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusAddLinkSelector = () => useAppSelector((state) => state.addLink);
