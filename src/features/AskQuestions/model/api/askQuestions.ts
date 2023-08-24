import { ASK_QUESTIONS_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { AskQuestionType } from '../types';

export const askQuestions = createAsyncThunk<
void,
AskQuestionType,
ThunkConfig<string>
>(
   'comment/askQuestions',
   async (data, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      try {
         const response = await extra.api.post(ASK_QUESTIONS_ENDPOINT, data);
         return response.data;
      } catch (e) {
         return rejectWithValue('error');
      }
   },
);
