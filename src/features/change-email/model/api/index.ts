import { API_URL, CHANGE_EMAIL_ENDPOINT } from 'shared/libs/constants/baseURL';
import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ChangeEmailType } from 'features/change-email/model/types';

export const changeEmail = (data: ChangeEmailType) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());

    const response = await axios.put(API_URL + CHANGE_EMAIL_ENDPOINT, data, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    const resultResponse = response.data;

    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
