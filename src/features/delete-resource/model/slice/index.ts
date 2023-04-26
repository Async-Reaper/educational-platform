import { createSlice } from '@reduxjs/toolkit';
import { CreateTopicSchema } from 'features/create-topic/model/types';
import { fetchDeleteResource } from 'features/delete-resource/model/api/deleteResource';

const initialState: CreateTopicSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const deleteResourceSlice = createSlice({
  name: 'resource/deleteTopic',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeleteResource.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteResource.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchDeleteResource.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: deleteResourceActions } = deleteResourceSlice;
export const { reducer: deleteResourceReducer } = deleteResourceSlice;
