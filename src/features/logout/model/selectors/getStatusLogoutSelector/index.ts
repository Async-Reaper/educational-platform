import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusLogoutSelector = () => useAppSelector((state) => state.logout);
