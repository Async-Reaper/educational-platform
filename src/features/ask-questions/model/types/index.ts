export type AskQuestionType = {
  person_name: string;
  person_email: string;
  person_question: string;
};

export type AskQuestionSchema = {
  isSuccess: boolean,
  isLoading: boolean,
  error?: string;
}
