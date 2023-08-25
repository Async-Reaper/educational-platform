import { GET_ALL_COURSES_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { CoursesType } from '../types';
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
         const response = await extra.api.get<CoursesType[]>(GET_ALL_COURSES_ENDPOINT);
         const resultResponse = response.data;

         dispatch(coursesActions.getAllCourses(resultResponse));

         const groupedCourses: CoursesType[] = [];
         resultResponse?.map((course) => course.is_grouped && groupedCourses.push(course));
         localStorage.setItem('grouped_courses', JSON.stringify(groupedCourses));
      } catch (e) {
         console.log(e);
      }
   },
);
