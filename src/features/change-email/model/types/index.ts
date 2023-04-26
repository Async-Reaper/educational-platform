export type ChangeEmailType = {
  new_user_email: string;
};

export type ChangeEmailSchema = {
  email: string;
  isSuccess: boolean,
  isLoading: boolean,
  error?: string;
};
