export type AddCommentType = {
  idResource: number;
  person_name: string;
  text: string;
};

export type AddCommentSchema = {
  isSuccess: boolean,
  isLoading: boolean,
  error?: string;
};
