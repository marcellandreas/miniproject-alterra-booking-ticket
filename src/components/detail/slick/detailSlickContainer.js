import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Slider from "react-slick";
import DetailSlider from "./detailSlider.js";

const DetailSlickContainer = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/credits`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        console.log("datas aktor =>", res.data.cast);
        setCredits(res.data.cast.slice(0, 6));
      });
  }, [id]);
  var settings = {
    dots: false,
    // infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <Slider {...settings}>
      {credits.map((credit) => (
        <DetailSlider credit={credit} key={credit.id} />
      ))}
    </Slider>
  );
};

export default DetailSlickContainer;
