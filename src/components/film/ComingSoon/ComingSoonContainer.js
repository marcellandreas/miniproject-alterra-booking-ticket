import axios from "axios";
import "./now.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComing } from "../../redux/comingSoonSlide";
import ComingSoon from "./ComingSoon";
const ComingSoonContainer = () => {
  const comingSoon = useSelector((state) => state.comingsoon.coming);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        // console.log("datas coming soon =>", res.data.results);
        dispatch(setComing(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("ada data nya coming? ", comingSoon);
  return (
    <>
      <ComingSoon coming={comingSoon} />
    </>
  );
};

export default ComingSoonContainer;
