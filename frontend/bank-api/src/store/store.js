import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import tokenReducer from "./token";
import profileReducer from "./profile";
/**
 * Store configuration
 */
const store = configureStore({
  reducer: { auth: authReducer, token: tokenReducer, profile: profileReducer },
});

export default store;