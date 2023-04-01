import { useAppSelector } from 'shared/libs/hooks/useAppSelector';

export const getStatusRequest = () => useAppSelector((state) => state.request);
