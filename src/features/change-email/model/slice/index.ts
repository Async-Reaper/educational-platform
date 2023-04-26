import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeEmailSchema } from 'features/change-email';
import { fetchChangeEmail } from 'features/change-email/model/api/changeEmail';

const initialState: ChangeEmailSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const changeEmailSlice = createSlice({
  name: 'user/changeEmail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangeEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChangeEmail.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchChangeEmail.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { actions: changeEmailActions } = changeEmailSlice;
export const { reducer: changeEmailReducer } = changeEmailSlice;
