import axios from 'axios';
import { API_URL, GET_TOPIC_ENDPOINT } from 'shared/constants/baseURL';
import { requestActions } from 'shared/libs/slices';
import { TopicsType } from '../types';
import { topicActions } from '../slice';

export const getTopic = (id: number | string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.get<TopicsType>(API_URL + GET_TOPIC_ENDPOINT + id);
    const responseAnswer = response.data;
    dispatch(topicActions.getTopic(responseAnswer));
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
