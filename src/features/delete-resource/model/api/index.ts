import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, DELETE_RESOURCE_ENDPOINT } from 'shared/constants/baseURL';

export const deleteResource = (idResource: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.delete(`${API_URL + DELETE_RESOURCE_ENDPOINT + idResource}/`, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    dispatch(requestActions.successRequest());
    window.location.reload();
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
