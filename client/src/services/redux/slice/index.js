import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: true,
};

const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    logIn(state, action) {
      console.log("login action");
      state.isLogged = true;
    },
    logOut(state, action) {
      state.isLogged = false;
    },
  },
});

console.log(loggedSlice);

export const { logIn, logOut } = loggedSlice.actions;

export default loggedSlice.reducer;
