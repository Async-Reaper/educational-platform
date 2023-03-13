export interface User {
  id?: string;
  avatar: string;
  firstname: string;
  surname: string;
  phone: string;
};

export interface UserSchema {
  data?: User
}