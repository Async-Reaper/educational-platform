import { createSlice } from '@reduxjs/toolkit';
import { UploadResourceSchema } from '../types';
import { uploadResource } from '../api/uploadResource';

const initialState: UploadResourceSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const uploadResourceSlice = createSlice({
  name: 'resource/uploadResource',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadResource.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(uploadResource.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(uploadResource.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: uploadResourceActions } = uploadResourceSlice;
export const { reducer: uploadResourceReducer } = uploadResourceSlice;
