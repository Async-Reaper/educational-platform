import { ADD_LINK_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { AddLinkType } from '../types';

export const addLink = createAsyncThunk<
void,
AddLinkType,
ThunkConfig<string>
>(
   'comment/addComment',
   async (data, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;
      const { id, link, description } = data;
      try {
         const response = await extra.api.post(`${ADD_LINK_ENDPOINT + id}/training_apparatus/`, {
            link,
            description,
         }, {
            headers: {
               Token: JSON.parse(localStorage.getItem('token') || ''),
               Signature: JSON.parse(localStorage.getItem('signature') || ''),
            },
         });
         return response.data;
      } catch (e) {
         return rejectWithValue('error');
      }
   },
);
