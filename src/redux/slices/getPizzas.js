import { createSlice } from "@reduxjs/toolkit";

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
  },
  reducers: {
    getPizzas: (state, action) => {
      state.pizzas = [];
      if (action.payload) {
        action.payload.map((item) => {
          return state.pizzas.push(item);
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
