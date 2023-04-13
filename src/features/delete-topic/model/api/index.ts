import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, DELETE_TOPIC_ENDPOINT } from 'shared/constants/baseURL';
import { getCourse } from '../../../../pages/course-page/model/api';

export const deleteTopic = (idTopic?: number | undefined, idCourse?: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.delete(API_URL + DELETE_TOPIC_ENDPOINT + idTopic, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    dispatch(getCourse(idCourse));
    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
