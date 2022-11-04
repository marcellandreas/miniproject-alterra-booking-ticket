import { createSlice } from "@reduxjs/toolkit";

export const nowPlayingSlice = createSlice({
  name: "data",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;
