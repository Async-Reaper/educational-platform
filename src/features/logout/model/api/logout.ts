import { AuthAnswer } from 'features/auth/model/types';
import { API_URL, LOGOUT_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { deleteCookie } from 'shared/libs/cookie';

export const fetchLogout = createAsyncThunk<
AuthAnswer,
number | undefined,
ThunkConfig<string>
>(
  'topic/deleteTopic',
  async (idTopic, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.delete(API_URL + LOGOUT_ENDPOINT, {
        headers: {
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
