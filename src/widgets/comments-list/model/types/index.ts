import { UserType } from 'entities/user';

export type CommentType = {
  id: number,
  answers: Answer[],
  person_name: string;
  text: string;
  creation_date: string;
};

type Answer = {
  id: number;
  teacher: Teacher,
  creation_date: string;
  text: string;
};

type Teacher = {
  full_name: string;
  id: number;
  email: string;
  icon: string | null;
}

export type CommentSchema = {
  data?: CommentType[] | null
};


