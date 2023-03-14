import { StateSchema } from "app/providers/store-provider";
import { useAppSelector } from "shared/libs/hooks/useAppSelector";

export const getAllCoursesSelector = useAppSelector((state) => state.courses.data);
