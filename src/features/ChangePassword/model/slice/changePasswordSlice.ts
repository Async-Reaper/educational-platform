import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordSchema } from '../types';
import { changePassword } from '../api/changePassword';

const initialState: ChangePasswordSchema = {
   isSuccess: false,
   isLoading: false,
   error: undefined,
};

const changePasswordSlice = createSlice({
   name: 'user/changePassword',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(changePassword.pending, (state) => {
            state.isSuccess = false;
            state.isLoading = true;
         })
         .addCase(changePassword.fulfilled, (state) => {
            state.isSuccess = true;
            state.isLoading = false;
         })
         .addCase(changePassword.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
         });
   },
});

export const { actions: changePasswordActions } = changePasswordSlice;
export const { reducer: changePasswordReducer } = changePasswordSlice;
