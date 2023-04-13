import { TopicsType } from '../../../topic-page/model/types';

export type CourseType = {
  id: number;
  topics: TopicsType[],
  name: string;
  description: string;
};

export type CourseSchema = {
  data?: CourseType
};
