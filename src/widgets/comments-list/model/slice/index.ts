import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentSchema, CommentType } from 'widgets/comments-list';
import { getAllComments } from 'widgets/comments-list/model/api';

const initialState: CommentSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllComments.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
