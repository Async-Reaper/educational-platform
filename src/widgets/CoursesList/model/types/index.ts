export type CoursesType = {
  id: number;
  name: string;
  description: string;
  is_grouped: boolean;
};

export type CoursesSchema = {
  data?: CoursesType[] | null;
  isLoading: boolean;
  error: string
};
