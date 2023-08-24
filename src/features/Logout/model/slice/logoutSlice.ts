import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'shared/libs/cookie';
import { logout } from '../api/logout';
import { LogoutSchema } from '../types';

const initialState: LogoutSchema = {
   isSuccess: false,
   isLoading: false,
   error: undefined,
};

const logoutSlice = createSlice({
   name: 'user/logout',
   initialState,
   reducers: {
      logout() {
         localStorage.removeItem('token');
         localStorage.removeItem('signature');
         deleteCookie('token');
         deleteCookie('full_name');
         deleteCookie('is_teacher');
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(logout.pending, (state) => {
            state.isSuccess = false;
            state.isLoading = true;
         })
         .addCase(logout.fulfilled, (state) => {
            state.isSuccess = true;
            state.isLoading = false;
         })
         .addCase(logout.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { actions: logoutActions } = logoutSlice;
export const { reducer: logoutReducer } = logoutSlice;
