import { useEffect } from "react";
import axios from "axios";

import { setMovies } from "../../redux/nowPlayingSlide";
import { useDispatch, useSelector } from "react-redux";
import NowPlaying from "./NowPlaying";
const NowPlayingContainer = () => {
  const movies = useSelector((state) => state.data.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        console.log("datas =>", res.data.results.slice(0, 10));
        dispatch(setMovies(res.data.results));
      });
  }, []);
  // console.log("data pada movies => ", movies);
  return (
    <>
      <NowPlaying movies={movies} />
    </>
  );
};

export default NowPlayingContainer;
