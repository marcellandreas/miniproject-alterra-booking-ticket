import React from "react";
import { useSelector } from "react-redux";

import Slider from "react-slick";
import DataSlider from "./dataSlider.js";
import "./slick.css";
import "./theme-slick.css";

const SimpleSlider = () => {
  const movies = useSelector((state) => state.data.movies.slice(0, 5));

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {movies.map((data) => (
        <DataSlider data={data} key={data.id} />
      ))}
    </Slider>
  );
};

export default SimpleSlider;
