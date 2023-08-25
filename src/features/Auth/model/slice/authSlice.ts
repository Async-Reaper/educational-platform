import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setCookie } from 'shared/libs/cookie';
import { AuthAnswer, AuthSchema } from '../types';
import { auth } from '../api/auth';

const initialState: AuthSchema = {
   data: undefined,
   isSuccess: false,
   isLoading: false,
   error: undefined,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(auth.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(
            auth.fulfilled,
            (state, action: PayloadAction<AuthAnswer>) => {
               state.isLoading = false;
               state.isSuccess = true;
               state.data = action.payload;
               setCookie('username', state.data.token);
               localStorage.setItem('token', JSON.stringify(state.data.token));
               localStorage.setItem('signature', JSON.stringify(state.data.signature));
            },
         )
         .addCase(auth.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { reducer: authReducer } = authSlice;
export const { actions: authActions } = authSlice;
