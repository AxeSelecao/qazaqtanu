import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  account: {
    _id: "64246584494198569ad776bd",
    age: "22",
    name: "Шалқар",
    password: "QazaqtanuOwner",
    phone: "+7 707 911 9971",
    points: 0,
  },
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
    addPoint(state, action) {
      state.account.points += 1;
    },
  },
});

export const { logIn, logOut, setAccount, unsetAccount, addPoint } =
  loggedSlice.actions;

export default loggedSlice.reducer;
