import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { AuthAnswer } from 'features/auth/model/types';
import { API_URL, LOGOUT_ENDPOINT } from 'shared/libs/constants/baseURL';
import { userActions } from 'entities/user';

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    dispatch(userActions.logout());
    const response = await axios.delete<AuthAnswer>(API_URL + LOGOUT_ENDPOINT, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    localStorage.removeItem('token');
    localStorage.removeItem('signature');
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
