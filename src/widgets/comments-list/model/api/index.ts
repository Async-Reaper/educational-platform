import { API_URL, GET_ALL_COMMENTS_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { CommentType } from 'widgets/comments-list';

export const getAllComments = createAsyncThunk<
CommentType[],
number | undefined,
ThunkConfig<string>
>(
  'comment/getAllComment',
  async (idResource, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get(`${API_URL + GET_ALL_COMMENTS_ENDPOINT + idResource}/comments/`);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
