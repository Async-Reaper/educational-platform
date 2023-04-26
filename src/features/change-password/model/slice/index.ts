import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordSchema } from 'features/change-password/model/types';
import { fetchChangePassword } from 'features/change-password/model/api/changePassword';

const initialState: ChangePasswordSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const changePasswordSlice = createSlice({
  name: 'user/changeEmail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangePassword.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(fetchChangePassword.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchChangePassword.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { actions: changePasswordActions } = changePasswordSlice;
export const { reducer: changePasswordReducer } = changePasswordSlice;
