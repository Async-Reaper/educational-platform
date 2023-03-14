import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType, UserSchema } from 'entities/user/model/types';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo(state, action: PayloadAction<UserType>) {
      state.data = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
