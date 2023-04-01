import axios from 'axios';
import { API_URL, UPLOAD_RESOURCE_ENDPOINT } from 'shared/libs/constants/baseURL';
import { UploadResource } from 'features/upload-resource/model/types';
import { requestActions } from 'shared/libs/slices';

export const auth = (data: UploadResource) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(API_URL + UPLOAD_RESOURCE_ENDPOINT, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token: localStorage.getItem('token'),
        Signature: localStorage.getItem('signature'),
      },
    });
    const resultResponse = response.data;
    console.log(resultResponse);
    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
