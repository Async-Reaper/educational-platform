import { createSlice } from '@reduxjs/toolkit';

interface Slice {
  loading: boolean,
  success: boolean,
  error: boolean
}

const initialState: Slice = {
  loading: false,
  success: false,
  error: false,
};

const requestSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    fetchRequest(state) {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    successRequest(state) {
      state.loading = false;
      state.success = true;
      state.error = false;
    },
    errorRequest(state) {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
  },
});

export const { actions: requestActions } = requestSlice;
export const { reducer: requestReducer } = requestSlice;
