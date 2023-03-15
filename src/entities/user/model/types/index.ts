export interface UserType {
  id?: string;
  avatar: File | string;
  firstname: string;
  surname: string;
  phone: string;
}

export interface UserSchema {
  data?: UserType;
}
