import { createSlice } from "@reduxjs/toolkit";

export const formErrorSLice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    loginData: (state, action) => {
      state.value.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginData } = formErrorSLice.actions;

export default formErrorSLice.reducer;
