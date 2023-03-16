import axios from 'axios';
import { API_URL } from 'shared/constants/baseURL';

export const auth = async (data: any) => {
  try {
    const request = await axios.post(`${API_URL}user/login`, data);
    const res = request.data;
    if (res.message === undefined) {
      localStorage.setItem('id', res.id);
      localStorage.setItem('firstname', res.firstname);
      localStorage.setItem('surname', res.surname);
      localStorage.setItem('phone', res.phone);
      localStorage.setItem('avatar', res.avatar);
      localStorage.setItem('name_work', res.name_work);
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};
