import type { AxiosPromise } from "axios";
import { UserSchema } from "entities/user/types";
import { apiInstance } from "./base";

const BASE_URL = "/todos";

export type GetTasksListParams = {
  userId?: number;
  completed?: boolean;
};

export type GetTaskByIdParams = {
  taskId: number;
};

export const getUserInfo = ({
  taskId,
  ...params
}: GetTaskByIdParams): AxiosPromise<UserSchema> => {
  return apiInstance.get(`${BASE_URL}/${taskId}`, { params });
};