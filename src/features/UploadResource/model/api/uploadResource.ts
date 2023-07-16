import { UPLOAD_RESOURCE_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { UploadResourceType } from '../types';

export const uploadResource = createAsyncThunk<
void,
UploadResourceType,
ThunkConfig<string>
>(
  'resource/uploadResource',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { id, dataUpload } = data;
    try {
      const response = await extra.api.post(
        `${UPLOAD_RESOURCE_ENDPOINT + id}/resource/`,
        {
          name: dataUpload.get('name'),
          description: dataUpload.get('description'),
          resource_type: dataUpload.get('resource_type'),
          resource_file: dataUpload.get('resource_file'),
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Token: JSON.parse(localStorage.getItem('token') || ''),
            Signature: JSON.parse(localStorage.getItem('signature') || ''),
          },
        },
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
