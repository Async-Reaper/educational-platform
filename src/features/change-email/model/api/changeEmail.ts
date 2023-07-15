import { CHANGE_EMAIL_ENDPOINT } from 'shared/constants/baseURL';
import { ChangeEmailType } from 'features/change-email/model/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { changeEmailActions } from 'features/change-email';
import { AxiosError } from 'axios';

export const fetchChangeEmail = createAsyncThunk<
void,
ChangeEmailType,
ThunkConfig<string>
>(
  'user/changeEmail',
  async (data, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;
    try {
      const response = await extra.api.put(CHANGE_EMAIL_ENDPOINT, data, {
        headers: {
          Token: JSON.parse(localStorage.getItem('token') || ''),
          Signature: JSON.parse(localStorage.getItem('signature') || ''),
        },
      });
      dispatch(changeEmailActions.changeEmail(data.new_user_email));
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e?.response?.data.new_user_email[0].match(/already|used/i)) {
          return rejectWithValue('already');
        }
      }
      return rejectWithValue('Произошла ошибка, повторите попытку позже');
    }
  },
);
