import { createSlice } from '@reduxjs/toolkit';
import { DeleteTopicSchema } from 'features/delete-topic/model/types';
import { fetchDeleteTopic } from 'features/delete-topic/model/api/deleteTopic';

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
      .addCase(fetchDeleteTopic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteTopic.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchDeleteTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: deleteTopicReducer } = deleteTopicSlice;
export const { actions: deleteTopicActions } = deleteTopicSlice;
