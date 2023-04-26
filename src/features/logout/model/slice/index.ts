import { createSlice } from '@reduxjs/toolkit';
import { fetchLogout } from 'features/logout/model/api/logout';
import { LogoutSchema } from 'features/logout/model/types';
import {deleteCookie} from "shared/libs/cookie";

const initialState: LogoutSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const logoutSlice = createSlice({
  name: 'user/logout',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;

        localStorage.removeItem('token');
        localStorage.removeItem('signature');

        deleteCookie('token');
        deleteCookie('full_name');
        deleteCookie('is_teacher');
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: logoutActions } = logoutSlice;
export const { reducer: logoutReducer } = logoutSlice;
