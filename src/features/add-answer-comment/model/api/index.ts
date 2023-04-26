import { ADD_ANSWER_ENDPOINT, API_URL } from 'shared/constants/baseURL';
import { AnswerCommentType } from 'features/add-answer-comment/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchAnswerComment = createAsyncThunk<
void,
AnswerCommentType,
ThunkConfig<string>
>(
  'comment/addAnswerComment',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { id, text } = data;
    try {
      const response = await extra.api.post(`${API_URL + ADD_ANSWER_ENDPOINT + id}/answer/`, {
        text,
      }, {
        headers: {
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      rejectWithValue('error');
    }
  },
);
