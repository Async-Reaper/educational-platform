import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ADD_LINK_ENDPOINT, API_URL } from 'shared/libs/constants/baseURL';
import { AddLinkType } from 'features/add-link/model/types';

export const addLink = (data: AddLinkType, id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(`${API_URL + ADD_LINK_ENDPOINT + id}/training_apparatus/`, data, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });

    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
