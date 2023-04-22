import { useAppSelector } from 'shared/hooks/useAppSelector';

export const authSelector = () => useAppSelector((state) => state.auth);
