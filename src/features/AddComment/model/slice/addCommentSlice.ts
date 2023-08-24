import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addComment } from '../api/addComment';
import { AddCommentSchema } from '../types';

const initialState: AddCommentSchema = {
   isSuccess: false,
   isLoading: false,
   error: undefined,
};

const addCommentSlice = createSlice({
   name: 'comment/addComment',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(addComment.pending, (state) => {
            state.isSuccess = false;
            state.isLoading = true;
         })
         .addCase(addComment.fulfilled, (state) => {
            state.isSuccess = true;
            state.isLoading = false;
         })
         .addCase(addComment.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
         });
   },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
