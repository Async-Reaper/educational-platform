import { createSlice } from '@reduxjs/toolkit';
import { CourseSchema } from 'entities/course/model/types';

const initialState: CourseSchema = {
  data: undefined,
  isLoading: false,
};

const deleteTopicSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    deleteTopic(state, action) {
      state.data?.topics.filter((topic) => topic.id !== action.payload);
    },
  },
});

export const { reducer: deleteTopicReducer } = deleteTopicSlice;
export const { actions: deleteTopicActions } = deleteTopicSlice;
