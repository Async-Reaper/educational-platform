import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAddLink } from 'features/add-link/model/api';
import { AddLinkSchema } from 'features/add-link/model/types';

const initialState: AddLinkSchema = {
  isSuccess: false,
  isLoading: false,
  error: undefined,
};

const addLinkSlice = createSlice({
  name: 'resource/addLink',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddLink.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(fetchAddLink.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchAddLink.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { actions: addLinkActions } = addLinkSlice;
export const { reducer: addLinkReducer } = addLinkSlice;
