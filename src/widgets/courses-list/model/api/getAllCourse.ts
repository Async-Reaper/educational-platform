import axios from 'axios';
import { GET_ALL_COURSES_ENDPOINT } from 'shared/constants/baseURL';
import { coursesActions } from 'widgets/courses-list/model/slice/coursesListSlice';
import { CoursesType } from 'widgets/courses-list/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const getAllCourse = createAsyncThunk<
any,
void,
ThunkConfig<any>
>(
  'course/getAllCourses',
  async (_, thunkApi) => {
    const { dispatch, extra } = thunkApi;

    try {
      const response = await extra.api.get(GET_ALL_COURSES_ENDPOINT);
      const resultResponse = response.data;

      dispatch(coursesActions.getAllCourses(resultResponse));
    } catch (e) {
      console.log(e);
    }
  },
);
