import { createSlice } from "@reduxjs/toolkit";

export const getToken = createSlice({
  name: "securityKey",
  initialState: {
    key: [],
  },
  reducers: {
    getSecurityKey: (state, action) => {
      state.key.push(action.payload);
    },
  },
});

export const { getSecurityKey } = getToken.actions;

export default getToken.reducer;
