import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ADD_ANSWER_ENDPOINT, API_URL } from 'shared/libs/constants/baseURL';
import { AnswerCommentType } from 'features/answer-comment/model/types';

export const answerComment = (data: AnswerCommentType, id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(`${API_URL + ADD_ANSWER_ENDPOINT + id}/answer/`, data);

    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
