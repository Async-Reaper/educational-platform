import { GET_TOPIC_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { TopicsType } from '../types';

export const getTopic = createAsyncThunk<
TopicsType,
string | number | undefined,
ThunkConfig<string>
>(
   'topic/getTopic',
   async (id, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      try {
         const response = await extra.api.get(GET_TOPIC_ENDPOINT + id);
         return response.data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
