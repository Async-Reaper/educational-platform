import { API_URL, CHANGE_PASSWORD_ENDPOINT } from 'shared/constants/baseURL';
import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ChangePasswordType } from 'features/change-password/model/types';
import { logout } from 'features/logout/model/api/logout';
import { deleteCookie } from 'shared/libs/cookie';

export const changePassword = (data: ChangePasswordType) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());

    const response = await axios.put(API_URL + CHANGE_PASSWORD_ENDPOINT, data, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    const resultResponse = response.data;
    localStorage.removeItem('token');
    localStorage.removeItem('signature');

    deleteCookie('token');
    deleteCookie('full_name');
    deleteCookie('is_teacher');
    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
