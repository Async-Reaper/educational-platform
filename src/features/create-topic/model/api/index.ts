import { CreateTopicType } from 'features/create-topic/model/types';
import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, CREATE_TOPIC_ENDPOINT } from 'shared/libs/constants/baseURL';

export const createTopic = (data: CreateTopicType, id: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(`${API_URL + CREATE_TOPIC_ENDPOINT + id}/topic/`, data, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });

    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
