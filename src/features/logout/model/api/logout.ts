import { AuthAnswer } from 'features/auth/model/types';
import { API_URL, LOGOUT_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { logoutActions } from 'features/logout';

export const fetchLogout = createAsyncThunk<
AuthAnswer,
number | undefined,
ThunkConfig<string>
>(
  'user/logout',
  async (idTopic, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;
    try {
      const response = await extra.api.delete(API_URL + LOGOUT_ENDPOINT, {
        headers: {
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      });

      dispatch(logoutActions.logout());
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
