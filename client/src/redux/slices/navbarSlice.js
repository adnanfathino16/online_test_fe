import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    button: false,
  },
  reducers: {
    triggerNavbar: (state, action) => {
      state.button = action.payload;
    },
  },
});

export const { triggerNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
