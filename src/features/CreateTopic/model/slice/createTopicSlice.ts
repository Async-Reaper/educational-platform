import { createSlice } from '@reduxjs/toolkit';
import { CreateTopicSchema } from '../types';
import { createTopic } from '../api/createTopic';

const initialState: CreateTopicSchema = {
   isSuccess: false,
   isLoading: false,
   error: undefined,
};

const createTopicSlice = createSlice({
   name: 'topic/createTopic',
   initialState,
   reducers: {

   },
   extraReducers: (builder) => {
      builder
         .addCase(createTopic.pending, (state) => {
            state.isSuccess = false;
            state.isLoading = true;
         })
         .addCase(createTopic.fulfilled, (state) => {
            state.isSuccess = true;
            state.isLoading = false;
         })
         .addCase(createTopic.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { actions: createTopicActions } = createTopicSlice;
export const { reducer: createTopicReducer } = createTopicSlice;
