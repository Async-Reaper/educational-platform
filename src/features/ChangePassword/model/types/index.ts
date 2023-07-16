export type ChangePasswordType = {
  old_password: string;
  new_password: string;
  new_password2: string;
};

export type ChangePasswordSchema = {
  isSuccess: boolean,
  isLoading: boolean,
  error?: string;
}
