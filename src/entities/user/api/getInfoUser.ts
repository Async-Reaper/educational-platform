import axios, { AxiosError } from 'axios';
import { API_URL, USER_INFO_ENDPOINT } from 'shared/constants/baseURL';
import { requestActions } from 'shared/libs/slices';
import { userActions, UserType } from 'entities/user';
import { deleteCookie, setCookie } from 'shared/libs/cookie';

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

    setCookie('full_name', infoUser.full_name);
    setCookie('is_teacher', infoUser.is_teacher);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error?.response?.data.detail.match(/no such token/i)) {
        localStorage.removeItem('token');
        localStorage.removeItem('signature');
        deleteCookie('token');
        deleteCookie('full_name');
        deleteCookie('is_teacher');
        window.location.reload();
      }
    }
  }
};
