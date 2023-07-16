import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteCookie, setCookie } from 'shared/libs/cookie';
import { logoutActions } from 'features/Logout';
import { changeEmailActions } from 'features/ChangeEmail';
import { getInfoUser } from '../api/getInfoUser';
import { UserSchema, UserType } from '../types';

const initialState: UserSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInfoUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.isLoading = true;
        state.data = action.payload;
        setCookie('full_name', action.payload.full_name);
        setCookie('is_teacher', action.payload.is_teacher);
      })
      .addCase(getInfoUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        if (state?.error === 'token') {
          localStorage.removeItem('token');
          localStorage.removeItem('signature');
          deleteCookie('token');
          deleteCookie('full_name');
          deleteCookie('is_teacher');
          window.location.reload();
        }
      })
      .addCase(logoutActions.logout, (state) => {
        state.data = null;
      })
      .addCase(changeEmailActions.changeEmail, (state, action) => {
        if (state.data) {
          state.data.email = action.payload;
        }
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
