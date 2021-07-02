import { createSlice } from "@reduxjs/toolkit";

export const pizzasSlice = createSlice({
  name: "addPizzas",
  initialState: {
    data: [],
  },
  reducers: {
    onePizza: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onePizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;
