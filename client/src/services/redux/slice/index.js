import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  account: {},
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
    setAccount(state, action) {
      console.log(action.payload);
      state.account = action.payload;
    },
    unsetAccount(state, action) {
      console.log(action.payload);
      state.account = action.payload;
    },
  },
});

export const { logIn, logOut, setAccount, unsetAccount } = loggedSlice.actions;

export default loggedSlice.reducer;
