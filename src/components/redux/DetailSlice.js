import { createSlice } from "@reduxjs/toolkit";

export const DetailSlice = createSlice({
  name: "databyid",
  initialState: {
    moviebyid: {},
  },
  reducers: {
    setMovieByid: (state, action) => {
      state.moviebyid = action.payload;
    },
  },
});

export const { setMovieByid } = DetailSlice.actions;
export default DetailSlice.reducer;
