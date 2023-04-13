import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopicSchema, TopicsType } from '../types';

const initialState: TopicSchema = {};

const topicSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getTopic(state, action: PayloadAction<TopicsType>) {
      state.data = action.payload;
    },
  },
});

export const { actions: topicActions } = topicSlice;
export const { reducer: topicReducer } = topicSlice;
