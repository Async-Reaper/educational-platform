import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusUploadResourceSelector = () => useAppSelector((state) => state.uploadResource);
