import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeEmailSchema } from '../types';
import { changeEmail } from '../api/changeEmail';

const initialState: ChangeEmailSchema = {
  email: '',
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const changeEmailSlice = createSlice({
  name: 'user/changeEmail',
  initialState,
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeEmail.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(changeEmail.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(changeEmail.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        if (state?.error === 'already') {
          state.error = 'Такой адрес электронной почты уже используется';
        }
      });
  },
});

export const { actions: changeEmailActions } = changeEmailSlice;
export const { reducer: changeEmailReducer } = changeEmailSlice;
