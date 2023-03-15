import { AppDispatch } from 'app/providers/store-provider';
import axios from 'axios';
import { API_URL, GET_INFO_USER } from 'shared/constants/baseURL';
import { userActions } from '../model/slice';
import { UserType } from '../model/types';

export const getInfoUser = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const request = await axios.get<UserType>(API_URL + GET_INFO_USER + id);
    const infoUser = request.data;
    dispatch(userActions.getUserInfo(infoUser));
  } catch (error) {
    console.log(error);
  }
};
