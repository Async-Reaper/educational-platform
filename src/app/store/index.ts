import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "widgets/courses-list";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
