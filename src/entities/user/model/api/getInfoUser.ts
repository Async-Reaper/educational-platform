import axios from 'axios';
import { requestActions } from 'shared/libs/slices';
import { API_URL, USER_INFO_ENDPOINT } from 'shared/constants/baseURL';
import { userActions } from '../slice';
import { UserType } from '../types';

export const getInfoUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest);
    const request = await axios.get<UserType>(API_URL + USER_INFO_ENDPOINT, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    const infoUser = request.data;
    dispatch(requestActions.successRequest);
    dispatch(userActions.getUserInfo(infoUser));
  } catch (error) {
    console.log(error);
  }
};
