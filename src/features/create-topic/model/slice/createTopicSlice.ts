import { createSlice } from '@reduxjs/toolkit';
import { CreateTopicSchema } from 'features/create-topic/model/types';
import { fetchCreateTopic } from 'features/create-topic/model/api/createTopic';

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
      .addCase(fetchCreateTopic.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(fetchCreateTopic.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchCreateTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: createTopicActions } = createTopicSlice;
export const { reducer: createTopicReducer } = createTopicSlice;
