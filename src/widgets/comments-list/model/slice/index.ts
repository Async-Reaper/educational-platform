import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentSchema, CommentType } from 'widgets/comments-list/model/types';

const initialState: CommentSchema = {};

const commentsSlice = createSlice({
  name: 'get all comments',
  initialState,
  reducers: {
    getAllComments(state, action: PayloadAction<CommentType[]>) {
      state.data = action.payload;
    },
  },
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
