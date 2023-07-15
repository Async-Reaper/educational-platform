import { USER_INFO_ENDPOINT } from 'shared/constants/baseURL';
import { UserType } from 'entities/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { AxiosError } from 'axios';

export const getInfoUser = createAsyncThunk<
UserType,
void,
ThunkConfig<string>
>(
  'user/userData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<UserType>(USER_INFO_ENDPOINT, {
        headers: {
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e?.response?.data.detail.match(/token|authentication/i)) {
          return rejectWithValue('token');
        }
      }
      return rejectWithValue('error');
    }
  },
);
