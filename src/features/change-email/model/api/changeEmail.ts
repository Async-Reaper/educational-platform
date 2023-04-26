import { API_URL, CHANGE_EMAIL_ENDPOINT } from 'shared/constants/baseURL';
import { ChangeEmailType } from 'features/change-email/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchChangeEmail = createAsyncThunk<
void,
ChangeEmailType,
ThunkConfig<string>
>(
  'comment/addComment',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.put(API_URL + CHANGE_EMAIL_ENDPOINT, data, {
        headers: {
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
