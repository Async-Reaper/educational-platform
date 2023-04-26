import { CreateTopicType } from 'features/create-topic/model/types';
import { API_URL, CREATE_TOPIC_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchCreateTopic = createAsyncThunk<
void,
CreateTopicType,
ThunkConfig<string>
>(
  'comment/addComment',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { id, name, description } = data;
    try {
      const response = await extra.api.post(`${API_URL + CREATE_TOPIC_ENDPOINT + id}/topic/`, {
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
