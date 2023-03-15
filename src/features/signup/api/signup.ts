import { UserType } from 'entities/user';
import axios from 'axios';
import { API_URL } from 'shared/constants/baseURL';

export const signup = async (data: any) => {
  try {
    const request = await axios.post(`${API_URL}user/signup`, data);
    const res = request.data;
    return res;
  } catch (e) {
    console.log(e);
  }
};
