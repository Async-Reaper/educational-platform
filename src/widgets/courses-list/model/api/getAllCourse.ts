import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, GET_ALL_COURSES_ENDPOINT } from 'shared/libs/constants/baseURL';
import { coursesActions } from 'widgets/courses-list/model/slice';
import { CoursesType } from 'widgets/courses-list/model/types';

export const getAllCourse = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.get<CoursesType[]>(API_URL + GET_ALL_COURSES_ENDPOINT);
    const resultResponse = response.data;
    dispatch(coursesActions.getAllCourses(resultResponse));
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
