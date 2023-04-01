export type CoursesType = {
  id: number;
  name: string;
  description: string;
};

export type CoursesSchema = {
  data?: CoursesType[] | null
};
