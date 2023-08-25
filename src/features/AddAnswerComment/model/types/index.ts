export type AnswerCommentType = {
   id: number;
   text: string;
};

export type AnswerCommentSchema = {
   isSuccess: boolean,
   isLoading: boolean,
   error?: string;
};
