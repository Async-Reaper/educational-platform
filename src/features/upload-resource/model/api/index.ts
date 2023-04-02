import axios from 'axios';
import { API_URL, UPLOAD_RESOURCE_ENDPOINT } from 'shared/libs/constants/baseURL';
import { requestActions } from 'shared/libs/slices';

export const uploadResourceApi = (data: FormData, id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.post(
      `${API_URL + UPLOAD_RESOURCE_ENDPOINT + id}/resource/`,
      {
        resource_type: data.get('resource_type'),
        resource_file: data.get('resource_file'),
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      },
    );
    const resultResponse = response.data;
    console.log(resultResponse);
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
    dispatch(requestActions.errorRequest());
  }
};
