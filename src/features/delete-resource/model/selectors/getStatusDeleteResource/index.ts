import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusDeleteResource = () => useAppSelector((state) => state.deleteResource);
