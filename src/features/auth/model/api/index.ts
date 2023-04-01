import { AuthAnswer, AuthData } from 'features/auth/model/types';
import { API_URL, LOGIN_ENDPOINT } from 'shared/libs/constants/baseURL';
import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { getInfoUser } from 'entities/user';

export const auth = (data: AuthData) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());

    const response = await axios.post<AuthAnswer>(API_URL + LOGIN_ENDPOINT, data);
    const resultResponse = response.data;

    localStorage.setItem('token', JSON.stringify(resultResponse.token));
    localStorage.setItem('signature', JSON.stringify(resultResponse.signature));

    dispatch(requestActions.successRequest());
    dispatch(getInfoUser());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
