import { createSlice} from "@reduxjs/toolkit";
/**
 * Set initial state
 */
const initialAuthState = { isAuth: false };
/**
 * auth slice attribution
 */
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
      console.log("conected");
    },
    logout(state) {
      state.isAuth = false;
      console.log("disconected");
    },
  },
});
/**
 * Export actions and reducer
 */
export const authActions = authSlice.actions;
export default authSlice.reducer;