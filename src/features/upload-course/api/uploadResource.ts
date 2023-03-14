import axios from 'axios';

export const uploadResource = async (data: any) => {
  try {
    const request = await axios.post(API_URL, '/courses/upload__resource/', {
      data,
    });
    const result = request.data;
  } catch (e) {
    console.log(e);
  }
};
