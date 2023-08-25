import { LOGOUT_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { logoutActions } from '../slice/logoutSlice';

export const logout = createAsyncThunk<
void,
number | undefined,
ThunkConfig<string>
>(
   'user/logout',
   async (idTopic, thunkApi) => {
      const { extra, rejectWithValue, dispatch } = thunkApi;
      try {
         const response = await extra.api.delete(LOGOUT_ENDPOINT, {
            headers: {
               Token: JSON.parse(localStorage.getItem('token') || ''),
               Signature: JSON.parse(localStorage.getItem('signature') || ''),
            },
         });

         dispatch(logoutActions.logout());
         return response.data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
