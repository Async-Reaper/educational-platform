import axios from 'axios';
import { API_URL } from 'shared/constants/baseURL';

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    token: localStorage.getItem('token') || '',
  },
});
