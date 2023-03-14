import { useAppSelector } from "shared/libs/hooks/useAppSelector";

export const getInfoUserSelector = useAppSelector((state) => state.user.data);
