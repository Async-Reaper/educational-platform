import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, GET_ALL_COMMENTS_ENDPOINT } from 'shared/libs/constants/baseURL';

export const getAllComments = (idRes: any, setRes: any) => async (disp: AppDispatch) => {
  try {
    disp(requestActions.fetchRequest());
    const response = await axios.get(`${API_URL + GET_ALL_COMMENTS_ENDPOINT + idRes}/comments`);
    const resultResponse = response.data;
    setRes(resultResponse);
    disp(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
