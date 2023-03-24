export interface UserType {
  id?: string;
  avatar: File | string;
  firstname: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserSchema {
  data?: UserType;
}
