import { AuthAnswer, AuthSchema } from 'features/auth/model/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAuthUser } from 'features/auth/model/api';
import { setCookie } from 'shared/libs/cookie';

const initialState: AuthSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAuthUser.fulfilled,
        (state, action: PayloadAction<AuthAnswer>) => {
          state.isLoading = false;
          state.data = action.payload;
          setCookie('username', state.data.token);
          localStorage.setItem('token', JSON.stringify(state.data.token));
          localStorage.setItem('signature', JSON.stringify(state.data.signature));
        },
      )
      .addCase(fetchAuthUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: authReducer } = authSlice;
export const { actions: authActions } = authSlice;
