export interface UserType {
  id: number,
  last_login: null,
  full_name: string,
  icon: null,
  email: string,
  registration_date: string,
  is_staff: boolean,
  is_superuser: boolean,
  is_teacher: boolean,
  is_active: boolean
}

export interface UserSchema {
  data?: UserType | null;
  isLoading: boolean;
  error?: string;
}
