import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, GET_ALL_COMMENTS_ENDPOINT } from 'shared/constants/baseURL';

export const getAllComments = (idRes: any, setRes: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.get(`${API_URL + GET_ALL_COMMENTS_ENDPOINT + idRes}/comments/`);
    const resultResponse = response.data;
    setRes(resultResponse);
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
