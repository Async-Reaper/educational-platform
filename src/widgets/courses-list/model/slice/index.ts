import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoursesSchema, CoursesType } from 'widgets/courses-list/model/types';

const initialState: CoursesSchema = {};

const coursesSlice = createSlice({
  name: 'course/getAllCourses',
  initialState,
  reducers: {
    getAllCourses(state, action: PayloadAction<CoursesType[]>) {
      state.data = action.payload;
    },
  },
});

export const { actions: coursesActions } = coursesSlice;
export const { reducer: coursesReducer } = coursesSlice;
