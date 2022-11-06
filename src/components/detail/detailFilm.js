import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import { Image } from "react-bootstrap";
import NavbarPage from "../navbar";
import LoadingPage from "../../loading";

const DetailFilmPage = ({ movie, credits, videos, loading, key }) => {
  return (
    <>
      <NavbarPage />
      {loading ? (
        <LoadingPage />
      ) : (
        <div key={key}>
          {movie && (
            <div
              className="detail-container pb-2 "
              style={{
                backgroundImage: `url(${process.env.REACT_APP_IMG_URL}/${movie.backdrop_path})`,
              }}
            >
              <div className="detail-page container d-flex justify-content-center align-items-center flex-wrap">
                <div>
                  <Image
                    className="detail-image"
                    src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
                  />
                </div>
                <div className="detail-about text-white">
                  <h1 className="detail-title">{movie.title} </h1>
                  <p>
                    original Name: {movie.original_title} | Release Date:{" "}
                    {movie.release_date}
                  </p>
                  <p>{movie.overview}</p>
                  <div className="genres pb-3 pt-3">
                    {movie.genres &&
                      movie.genres.slice(0, 5).map((genre, i) => (
                        <span key={i} className="genres-item me-2">
                          {genre.name}
                        </span>
                      ))}
                  </div>
                  <Link to={`/buy-ticket/${movie.id}`} className="button m-3">
                    Buy Ticket
                  </Link>
                  <div>
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                      {" "}
                      Casts{" "}
                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-content-center">
                      {credits.map((credit, i) => {
                        return (
                          <div className="card-casts m-1" key={i}>
                            <Image
                              className="card-detail-image"
                              style={{
                                width: "150px",
                              }}
                              src={`${process.env.REACT_APP_IMG_URL}/${credit.profile_path}`}
                            />
                            <p className="text-center">{credit.name}</p>
                            <p className="text-center">As</p>
                            <p className="text-center">{credit.character}</p>
                          </div>
                        );
                      })}
                    </div>
                    {/* <DetailSlickContainer /> */}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="trailer-container">
            <div className="container pt-2">
              <h1 className="detail-title text-white">Trailer</h1>
              <div className=" detail-trailer d-flex flex-wrap align-content-center justify-content-center ">
                {videos.map((video) => {
                  return (
                    <iframe
                      className="m-4"
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="video"
                      width="500px"
                    ></iframe>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailFilmPage;
