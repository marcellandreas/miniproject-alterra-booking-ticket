import "./viewMore.css";
import { useSelector } from "react-redux";
import { Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavbarPage from "../../../components/navbar";
import FooterPage from "../../../components/footer/Footer";

const DetailNowPlaying = () => {
  const movies = useSelector((state) => state.data.movies);

  return (
    <>
      <NavbarPage />
      <div id="detailnow-playing" className="body-content ">
        <div className="container-body  m-auto">
          <div className="text-center text-white pt-4">
            <Card.Title>Now Playing</Card.Title>
          </div>
          <div className="horizontal-content d-flex">
            {movies.map((data) => {
              return (
                <div className="content" key={data.id}>
                  <div className="upper-content">
                    <Image
                      className="img"
                      src={`${process.env.REACT_APP_IMG_URL}/${data.poster_path}`}
                    />
                    <p className="title">{data.title}</p>
                  </div>
                  <div className="position-dekstop">
                    <p className="rating">
                      <span>⭐</span> {data.vote_average}/10
                    </p>
                    <p className="duration">
                      <span>{data.release_date}</span>{" "}
                      <span>{data.original_language}</span>
                    </p>
                    <p className="genre">Genre: {data.genre_ids}</p>
                    <div className="position-tablet">
                      <Link to={`/detail-movie/${data.id}`} className="button">
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* akhir */}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default DetailNowPlaying;
