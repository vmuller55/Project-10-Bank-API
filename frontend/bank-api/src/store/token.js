import { createSlice, current } from "@reduxjs/toolkit";
/**
 * Set initial state
 */
const initialTokenState = { token: undefined };
/**
 * Token slice attribution
 */
const tokenSlice = createSlice({
  name: "token",
  initialState: initialTokenState,
  reducers: {
    getToken(state, action) {
      state.token = action.payload;
      console.log(current(state));
    },
    dropToken(state) {
      state.token = initialTokenState;
      console.log(current(state));
    },
    getState(state) {
      console.log(current(state));
    },
  },
});

export const tokenActions = tokenSlice.actions;
export default tokenSlice.reducer;