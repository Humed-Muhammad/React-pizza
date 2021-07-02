import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersData: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.usersData.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
