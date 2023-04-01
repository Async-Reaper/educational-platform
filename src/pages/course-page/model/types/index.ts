export type CourseType = {
  id: number;
  topics: Topics[],
  name: string;
  description: string;
};

export type CourseSchema = {
  data?: CourseType
};

type Topics = {
  id: number;
  resources: Resource[],
  training_apparatuses: TrainingApparatuses[],
  name: string;
  description: string;
};

type Resource = {
  id: number;
  resource_type: string;
  file: string;
  topic: number
};

type TrainingApparatuses = {
  id: number;
  link: string;
  description: string;
  topic: number;
}
