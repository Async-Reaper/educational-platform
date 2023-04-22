export type AuthData = {
  email: string;
  password: string;
};

export type AuthAnswer = {
  token: string;
  signature: string;
};

export type AuthSchema = {
  data?: AuthAnswer;
  isLoading: boolean;
  error?: string;
};
