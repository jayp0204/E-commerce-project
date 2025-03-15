import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null, // user object
};

const authSlice = createSlice({
  name: "auth", // name of the slice
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
