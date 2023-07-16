import { ADD_COMMENT_ENDPOINT } from 'shared/constants/baseURL';
import { AddCommentType } from 'features/AddComment/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const addComment = createAsyncThunk<
AddCommentType,
AddCommentType,
ThunkConfig<string>
>(
  'comment/addComment',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { idResource, text, person_name } = data;
    try {
      const response = await extra.api.post(`${ADD_COMMENT_ENDPOINT + idResource}/comment/`, {
        text,
        person_name,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
