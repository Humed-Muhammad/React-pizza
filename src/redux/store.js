import { configureStore } from "@reduxjs/toolkit";
import addUsers from "./slices/users";
import loginUser from "./slices/loginUser";
import pizzasReducer from "./slices/getPizzas";
import addPizzaReducer from "./slices/addPizza";
import getToken from "./slices/getToken";

export default configureStore({
  reducer: {
    addUsers,
    loginUser,
    pizzasReducer,
    addPizzaReducer,
    getToken,
  },
});
