import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoursesSchema, CoursesType } from 'widgets/courses-list/model/types';
import { getAllCourse } from 'widgets/courses-list/model/api/getAllCourse';

const initialState: CoursesSchema = {
  isLoading: false,
  error: '',
};

const coursesSlice = createSlice({
  name: 'course/getAllCourses',
  initialState,
  reducers: {
    getAllCourses(state, action: PayloadAction<CoursesType[]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => builder
    .addCase(getAllCourse.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllCourse.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(getAllCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const { actions: coursesActions } = coursesSlice;
export const { reducer: coursesReducer } = coursesSlice;
