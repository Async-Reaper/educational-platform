import axios from 'axios';
import { API_URL } from 'shared/constants/baseURL';
import { AuthData } from 'features/auth/model/types';
import { AppDispatch } from 'app/store';
import { UploadResource } from 'features/upload-resource/model/types';

export const auth = (data: UploadResource) => async (dispatch: AppDispatch) => {
  try {

  } catch (e) {
    console.log(e);
  }
};
