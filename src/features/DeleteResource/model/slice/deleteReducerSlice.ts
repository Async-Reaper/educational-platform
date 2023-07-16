import { createSlice } from '@reduxjs/toolkit';
import { DeleteResourceSchema } from '../types';
import { deleteResource } from '../api/deleteResource';

const initialState: DeleteResourceSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const deleteResourceSlice = createSlice({
  name: 'resource/deleteResource',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteResource.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(deleteResource.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(deleteResource.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: deleteResourceActions } = deleteResourceSlice;
export const { reducer: deleteResourceReducer } = deleteResourceSlice;
