import { createSlice } from "@reduxjs/toolkit";

export const getUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = [];
      if (action.payload) {
        action.payload.map((item) => {
          return state.users.push(item);
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers } = getUsersSlice.actions;

export default getUsersSlice.reducer;
