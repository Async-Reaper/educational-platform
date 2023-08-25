import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AskQuestionSchema } from '../types';
import { askQuestions } from '../api/askQuestions';

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
         .addCase(askQuestions.pending, (state) => {
            state.isSuccess = false;
            state.isLoading = true;
         })
         .addCase(askQuestions.fulfilled, (state) => {
            state.isSuccess = true;
            state.isLoading = false;
         })
         .addCase(askQuestions.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
         });
   },
});

export const { actions: askQuestionsActions } = askQuestionsSlice;
export const { reducer: askQuestionsReducer } = askQuestionsSlice;
