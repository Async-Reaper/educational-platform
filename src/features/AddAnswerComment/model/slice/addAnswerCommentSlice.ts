import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addAnswerComment } from '../api/addAnswerComment';
import { AnswerCommentSchema } from '../types';

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
      .addCase(addAnswerComment.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(addAnswerComment.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(addAnswerComment.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { actions: addAnswerCommentActions } = addAnswerCommentSlice;
export const { reducer: addAnswerCommentReducer } = addAnswerCommentSlice;
