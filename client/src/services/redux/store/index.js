import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import loggedReducer from "../slice";
import { usersAPI } from "../API/usersAPI";

export const store = configureStore({
  reducer: {
    login: loggedReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});
