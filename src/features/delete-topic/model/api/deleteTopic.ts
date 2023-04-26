import { API_URL, DELETE_TOPIC_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchDeleteTopic = createAsyncThunk<
void,
number | undefined,
ThunkConfig<string>
>(
  'topic/deleteTopic',
  async (idTopic, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.delete(API_URL + DELETE_TOPIC_ENDPOINT + idTopic, {
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
