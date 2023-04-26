import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusChangeEmailSelector = () => useAppSelector((state) => state.changeEmail);
