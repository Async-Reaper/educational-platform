export type ChangeEmailType = {
  new_user_email: string;
};

export type ChangeEmailSchema = {
  isSuccess: boolean,
  isLoading: boolean,
  error?: string;
};
