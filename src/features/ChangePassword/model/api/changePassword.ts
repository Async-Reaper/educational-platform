import { CHANGE_PASSWORD_ENDPOINT } from 'shared/constants/baseURL';
import { deleteCookie } from 'shared/libs/cookie';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { ChangePasswordType } from '../types';

export const changePassword = createAsyncThunk<
void,
ChangePasswordType,
ThunkConfig<string>
>(
   'user/changePassword',
   async (data, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      try {
         const response = await extra.api.put(CHANGE_PASSWORD_ENDPOINT, data, {
            headers: {
               Token: JSON.parse(localStorage.getItem('token') || ''),
               Signature: JSON.parse(localStorage.getItem('signature') || ''),
            },
         });
         localStorage.removeItem('token');
         localStorage.removeItem('signature');

         deleteCookie('token');
         deleteCookie('full_name');
         deleteCookie('is_teacher');
         return response.data;
      } catch (e) {
         return rejectWithValue('error');
      }
   },
);
