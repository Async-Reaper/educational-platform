import { createSlice } from '@reduxjs/toolkit';
import { UploadResourceSchema } from 'features/upload-resource/model/types';
import { fetchUploadResource } from 'features/upload-resource/model/api/uploadResource';

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
      .addCase(fetchUploadResource.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUploadResource.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchUploadResource.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: uploadResourceActions } = uploadResourceSlice;
export const { reducer: uploadResourceReducer } = uploadResourceSlice;
