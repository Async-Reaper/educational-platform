export type { UserType, UserSchema } from './model/types';
export { userReducer, userActions } from './model/slice/index';
export { getInfoUserSelector } from './model/selector/getInfoUserSelector';
export { getInfoUser } from './model/api/getInfoUser';
