import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteTopic } from 'features/DeleteTopic';
import { getTopic } from '../api/getTopic';
import { TopicSchema, TopicsType } from '../types';

const initialState: TopicSchema = {
  isLoading: false,
  error: undefined,
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopic.fulfilled, (state, action: PayloadAction<TopicsType>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getTopic.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteTopic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTopic.fulfilled, (state) => {
        state.isLoading = false;
        state.data = undefined;
      })
      .addCase(deleteTopic.rejected, (state, action) => {
        state.error = action.payload;
      });
    // .addCase(deleteTopicActions.deleteTopic, (state,));
  },
});

export const { actions: topicActions } = topicSlice;
export const { reducer: topicReducer } = topicSlice;
