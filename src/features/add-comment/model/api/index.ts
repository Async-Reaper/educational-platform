import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ADD_COMMENT_ENDPOINT, API_URL } from 'shared/constants/baseURL';
import { AddCommentType } from 'features/add-comment/model/types';
import { getAllComments } from '../../../../widgets/comments-list/model/api';

export const addComment = (data: AddCommentType, idComment: number, idResource?: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(`${API_URL + ADD_COMMENT_ENDPOINT + idComment}/comment/`, data);
    window.location.reload();
    dispatch(requestActions.successRequest());
    // dispatch(getAllComments());
  } catch (e) {
    console.log(e);
  }
};
