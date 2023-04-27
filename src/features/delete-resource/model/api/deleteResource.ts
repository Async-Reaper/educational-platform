import { API_URL, DELETE_RESOURCE_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchDeleteResource = createAsyncThunk<
void,
number | undefined,
ThunkConfig<string>
>(
  'resource/deleteResource',
  async (idResource, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.delete(`${API_URL + DELETE_RESOURCE_ENDPOINT + idResource}/`, {
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
