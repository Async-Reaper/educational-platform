import axios from 'axios';
import { API_URL } from 'shared/constants/baseURL';

type CourseType =
    | 'programming'
    | 'web_design'
    | 'secure_information'
    | '3d_modeling';

export const getCourse = async (courseType: CourseType) => {
  try {
    const request = await axios.get(`${API_URL}courses/get_courses/${courseType}`);
    return request.data;
  } catch (e) {
    console.log(e);
  }
};
