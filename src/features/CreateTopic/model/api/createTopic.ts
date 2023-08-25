import { CREATE_TOPIC_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { CreateTopicType } from '../types';

export const createTopic = createAsyncThunk<
void,
CreateTopicType,
ThunkConfig<string>
>(
   'topic/createTopic',
   async (data, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      const { id, name, description } = data;
      try {
         const response = await extra.api.post(`${CREATE_TOPIC_ENDPOINT + id}/topic/`, {
            name,
            description,
         }, {
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
