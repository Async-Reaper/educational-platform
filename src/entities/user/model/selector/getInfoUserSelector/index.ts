import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getInfoUserSelector = () => useAppSelector((state) => state.user);
