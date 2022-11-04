import { createSlice } from "@reduxjs/toolkit";

export const comingSoonSlide = createSlice({
  name: "comingsoon",
  initialState: {
    coming: [],
  },
  reducers: {
    setComing: (state, action) => {
      state.coming = action.payload;
    },
  },
});

export const { setComing } = comingSoonSlide.actions;
export default comingSoonSlide.reducer;
