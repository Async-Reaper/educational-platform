export type TopicSchema = {
  data?: TopicsType
  isLoading: boolean;
  error?: string;
};

export type TopicsType = {
  id: number;
  resources?: {
    videos: ResourceType[],
    lectures: ResourceType[],
    presentations: ResourceType[]
  },
  training_apparatuses?: TrainingApparatuses[],
  name: string;
  description: string;
};

export type ResourceType = {
  id: number;
  file: string;
  name: string;
  description: string;
};

export type TrainingApparatuses = {
  id: number;
  link: string;
  description: string;
  topic: number;
};
