import { createSlice} from "@reduxjs/toolkit";
/**
 * Set initial state
 */
const initialAuthState = { 
  isAuth: false,
  rememberMe: false,
  email: '',
  password: '',
};
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
      localStorage.clear();
      console.log("disconected");
    },
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    saveCredentials: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    clearCredentials: (state) => {
      state.email = '';
      state.password = '';
    },
  },
});
/**
 * Export actions and reducer
 */

export const authActions = authSlice.actions;
export default authSlice.reducer;