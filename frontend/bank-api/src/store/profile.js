import { createSlice} from "@reduxjs/toolkit";
/**
 * Set initial state
 */
const initialProfileState = {
  firstName: undefined,
  lastName: undefined,
  id: undefined,
};
/**
 * proflie slice attribution
 */
const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    getNames(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id
    },
  },
});
/**
 * Export actions and reducer
 */
export const profileActions = profileSlice.actions;
export default profileSlice.reducer;