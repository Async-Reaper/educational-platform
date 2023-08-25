import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addLink } from '../api/addLink';
import { AddLinkSchema } from '../types';

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
         .addCase(addLink.pending, (state) => {
            state.isSuccess = false;
            state.isLoading = true;
         })
         .addCase(addLink.fulfilled, (state) => {
            state.isSuccess = true;
            state.isLoading = false;
         })
         .addCase(addLink.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
         });
   },
});

export const { actions: addLinkActions } = addLinkSlice;
export const { reducer: addLinkReducer } = addLinkSlice;
