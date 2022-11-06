import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailFilmPage from "./detailFilm";
import { setMovieByid } from "../redux/DetailSlice";
import axios from "axios";

const DetailContainer = () => {
  const { id } = useParams();
  const moviebyid = useSelector((state) => state.databyid.moviebyid);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // const [datasbyid, setDatasbyid] = useState({});
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        setLoading(false);
        // console.log("datas =>", res.data);
        dispatch(setMovieByid(res.data));
        // setDatasbyid(res.data);
      });
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/credits`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        setLoading(false);

        console.log("datas aktor =>", res.data.cast);
        setCredits(res.data.cast.slice(0, 4));
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/videos`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        setLoading(false);

        console.log("datas video =>", res.data.results);
        setVideos(res.data.results.slice(0, 4));
      });
  }, [id]);

  return (
    <>
      <DetailFilmPage
        movie={moviebyid}
        credits={credits}
        videos={videos}
        loading={loading}
        key={id}
      />
    </>
  );
};

export default DetailContainer;
