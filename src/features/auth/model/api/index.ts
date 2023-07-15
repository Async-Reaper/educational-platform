import { AuthAnswer, AuthData } from 'features/auth/model/types';
import { LOGIN_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchAuthUser = createAsyncThunk<
AuthAnswer,
AuthData,
ThunkConfig<string>
>(
  'user/auth',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post(LOGIN_ENDPOINT, data);
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
