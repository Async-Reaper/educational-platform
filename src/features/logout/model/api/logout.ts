import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { AuthAnswer } from 'features/auth/model/types';
import { API_URL, LOGOUT_ENDPOINT } from 'shared/constants/baseURL';
import { deleteCookie } from '../../../../shared/libs/cookie';

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.delete<AuthAnswer>(API_URL + LOGOUT_ENDPOINT, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    localStorage.removeItem('token');
    localStorage.removeItem('signature');

    deleteCookie('token');
    deleteCookie('full_name');
    deleteCookie('is_teacher');

    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
