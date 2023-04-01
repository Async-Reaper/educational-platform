import { AskQuestionType } from 'features/ask-questions/model/types';
import axios from 'axios';
import { API_URL, ASK_QUESTIONS_ENDPOINT } from 'shared/libs/constants/baseURL';
import { requestActions } from 'shared/libs/slices';

export const askQuestions = (data: AskQuestionType) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(API_URL + ASK_QUESTIONS_ENDPOINT, data);
    const resultResponse = response.data;
    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
