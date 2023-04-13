import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseSchema, CourseType } from 'pages/course-page/model/types';
import { TopicsType } from '../../../topic-page/model/types';

const initialState: CourseSchema = {};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getCourse(state, action: PayloadAction<CourseType>) {
      state.data = action.payload;
    },
  },
});

export const { actions: courseActions } = courseSlice;
export const { reducer: courseReducer } = courseSlice;
