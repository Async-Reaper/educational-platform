import axios from 'axios';
import {
  getStorage, listAll, ref, uploadBytes,
} from 'firebase/storage';
import { API_URL } from 'shared/constants/baseURL';

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

// eslint-disable-next-line max-len
export const uploadFiles = async (nameResource: string, typeResource: string, filesCourse: File[]) => {
  const storage = getStorage();
  const storageRef = ref(storage, `${nameResource}/${typeResource}/${filesCourse[0].name}`);
  await uploadBytes(storageRef, filesCourse[0]);

  const listRef = ref(storage, `${nameResource}/${typeResource}/${filesCourse[0].name}`);
  await listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        console.log(itemRef.fullPath);
      });
    }).catch((error) => {
      console.log(error);
    });
};
