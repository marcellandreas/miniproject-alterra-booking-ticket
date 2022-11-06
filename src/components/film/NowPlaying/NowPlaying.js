import "./now.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NowPlaying = ({ movies }) => {
  return (
    <>
      <div className="body-content " id="trending-now">
        <div className="container-body container">
          <div className="section-title">
            <h3>Now Playing</h3>
            <Link to="/now-playing/more">view more</Link>
          </div>
          <div className="horizontal-content">
            {/* Movie Now playing */}
            {movies.map((data) => {
              return (
                <div className="content" key={data.id}>
                  <div className="upper-content">
                    <Image
                      className="img"
                      src={`${process.env.REACT_APP_IMG_URL}/${data.poster_path}`}
                    />
                    <p className="title">{data.original_title}</p>
                  </div>
                  <div className="position-dekstop">
                    <p className="rating">
                      <span>⭐</span> {data.vote_average} / 10
                    </p>
                    <p className="duration">
                      <span>{data.release_date}</span>{" "}
                      <span>{data.original_language}</span>
                    </p>
                    {/* <p className="genre">Genre: Adventure, Action, Fantasy</p> */}
                    <div className="position-tablet">
                      <Link to={`/detail-movie/${data.id}`} className="button">
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* batas  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
