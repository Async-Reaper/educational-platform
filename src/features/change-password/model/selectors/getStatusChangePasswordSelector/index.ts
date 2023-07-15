import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusChangePasswordSelector = () => useAppSelector((state) => state.changePassword);
