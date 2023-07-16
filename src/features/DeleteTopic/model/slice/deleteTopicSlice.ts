import { createSlice } from '@reduxjs/toolkit';
import { DeleteTopicSchema } from '../types';
import { deleteTopic } from '../api/deleteTopic';

const initialState: DeleteTopicSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const deleteTopicSlice = createSlice({
  name: 'topic/deleteTopic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteTopic.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(deleteTopic.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: deleteTopicReducer } = deleteTopicSlice;
export const { actions: deleteTopicActions } = deleteTopicSlice;
