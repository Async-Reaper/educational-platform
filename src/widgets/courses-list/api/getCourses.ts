import { AppDispatch } from "app/providers/store-provider";
import axios from "axios";
import { CourseType } from "widgets/courses-list/model/types";
import { coursesActions } from "../model/slice/coursesSlice";

export const getCourses = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const request = await axios.get<CourseType[]>(API_URL + GET_ALL_COURSES);
      const courses = request.data;
      dispatch(coursesActions.getAllCourses(courses));
    } catch (error) {
      console.log(error);
    }
  };
};
