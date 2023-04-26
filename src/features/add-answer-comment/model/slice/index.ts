import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAnswerComment } from 'features/add-answer-comment/model/api';
import { AnswerCommentSchema } from 'features/add-answer-comment/model/types';

const initialState: AnswerCommentSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const addAnswerCommentSlice = createSlice({
  name: 'comment/addAnswerComment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswerComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAnswerComment.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchAnswerComment.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { actions: addAnswerCommentActions } = addAnswerCommentSlice;
export const { reducer: addAnswerCommentReducer } = addAnswerCommentSlice;
