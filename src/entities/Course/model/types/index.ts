import { TopicsType } from 'entities/Topic/model/types';

export type CourseType = {
  id: number;
  topics: TopicsType[],
  name: string;
  description: string;
};

export type CourseSchema = {
  data?: CourseType
  isLoading: boolean;
  error?: string;
};
