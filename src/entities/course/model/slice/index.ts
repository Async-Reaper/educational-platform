import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseSchema, CourseType } from 'entities/course/model/types';
import { getCourse } from 'entities/course/model/api';

const initialState: CourseSchema = {
  isLoading: false,
  error: undefined,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourse.fulfilled, (state, action: PayloadAction<CourseType>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { actions: courseActions } = courseSlice;
export const { reducer: courseReducer } = courseSlice;
