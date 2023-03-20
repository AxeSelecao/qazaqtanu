import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loggedReducer from "../slice";

export const store = configureStore({
  reducer: {
    login: loggedReducer,
  },
});
