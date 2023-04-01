import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, GET_ALL_COMMENTS_ENDPOINT } from 'shared/libs/constants/baseURL';
import { CommentType } from 'widgets/comments-list/model/types';
import { commentsActions } from 'widgets/comments-list/model/slice';

export const getAllComments = (id: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.get<CommentType[]>(`${API_URL + GET_ALL_COMMENTS_ENDPOINT + id}/comments`);
    const resultResponse = response.data;
    dispatch(commentsActions.getAllComments(resultResponse));
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
