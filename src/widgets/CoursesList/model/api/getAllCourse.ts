import { GET_ALL_COURSES_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { coursesActions } from '../slice/coursesListSlice';

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
