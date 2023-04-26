import { ADD_LINK_ENDPOINT, API_URL } from 'shared/constants/baseURL';
import { AddLinkType } from 'features/add-link/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchAddLink = createAsyncThunk<
void,
AddLinkType,
ThunkConfig<string>
>(
  'comment/addComment',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { id, link, description } = data;
    try {
      const response = await extra.api.post(`${API_URL + ADD_LINK_ENDPOINT + id}/training_apparatus/`, {
        link,
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
