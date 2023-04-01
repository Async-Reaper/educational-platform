import axios from 'axios';
import { API_URL, GET_COURSE_ID_ENDPOINT } from 'shared/libs/constants/baseURL';
import { requestActions } from 'shared/libs/slices';
import { CourseType } from 'pages/course-page/model/types';
import { courseActions } from 'pages/course-page/model/slice';

export const getCourse = (id: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.get<CourseType>(API_URL + GET_COURSE_ID_ENDPOINT + id);
    const responseAnswer = response.data;
    dispatch(courseActions.getCourse(responseAnswer));
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
