import { useAppSelector } from 'shared/hooks/useAppSelector';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getInfoUserSelector = () => useAppSelector((state) => state.user);
