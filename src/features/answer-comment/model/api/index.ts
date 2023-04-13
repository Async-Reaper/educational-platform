import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { ADD_ANSWER_ENDPOINT, API_URL } from 'shared/constants/baseURL';
import { AnswerCommentType } from 'features/answer-comment/model/types';

export const answerComment = (data: AnswerCommentType, id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(`${API_URL + ADD_ANSWER_ENDPOINT + id}/answer/`, data, {
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
