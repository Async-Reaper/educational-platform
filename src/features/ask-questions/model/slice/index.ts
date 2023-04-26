import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AskQuestionSchema } from 'features/ask-questions/model/types';
import { fetchAskQuestions } from 'features/ask-questions/model/api/askQuestions';

const initialState: AskQuestionSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const askQuestionsSlice = createSlice({
  name: 'comment/askQuestions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAskQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAskQuestions.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchAskQuestions.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { actions: askQuestionsActions } = askQuestionsSlice;
export const { reducer: askQuestionsReducer } = askQuestionsSlice;
