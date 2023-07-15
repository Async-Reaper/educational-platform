import { GET_COURSE_ID_ENDPOINT } from 'shared/constants/baseURL';
import { CourseType } from 'entities/course/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const getCourse = createAsyncThunk<
CourseType,
string | undefined,
ThunkConfig<string>
>(
  'course/getCourse',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get( GET_COURSE_ID_ENDPOINT + id);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
