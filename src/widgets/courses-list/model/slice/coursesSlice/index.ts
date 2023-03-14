import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseSchema, CourseType } from "../../types";

const initialState: CourseSchema = {
  data: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getAllCourses(state, action: PayloadAction<CourseType[]>) {
      state.data = action.payload;
    },
  },
});

export const { actions: coursesActions } = coursesSlice;
export const { reducer: coursesReducer } = coursesSlice;
