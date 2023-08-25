export type CommentType = {
   id: number,
   answers: AnswerType[],
   person_name: string;
   text: string;
   creation_date: string;
};

export type AnswerType = {
   id: number;
   teacher: TeacherType,
   creation_date: string;
   text: string;
};

type TeacherType = {
   full_name: string;
   id: number;
   email: string;
   icon: string | null;
};

export type CommentSchema = {
   data?: CommentType[] | null
   isLoading: boolean;
   error?: string;
};
