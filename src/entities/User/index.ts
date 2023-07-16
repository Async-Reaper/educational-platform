export {
  UserType,
  UserSchema,
} from './model/types';

export { userReducer, userActions } from './model/slice/userSlice';

export { getInfoUser } from './model/api/getInfoUser';

export * from './model/selector/userData/userData';
