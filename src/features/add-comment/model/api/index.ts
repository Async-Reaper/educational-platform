import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ADD_COMMENT_ENDPOINT, API_URL } from 'shared/libs/constants/baseURL';
import { AddCommentType } from 'features/add-comment/model/types';

export const addComment = (data: AddCommentType, id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(`${API_URL + ADD_COMMENT_ENDPOINT + id}/comment/`, data);

    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
