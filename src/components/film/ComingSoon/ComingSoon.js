import "./now.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ComingSoon = ({ coming }) => {
  return (
    <>
      <div className="body-content pb-5" id="trending-now">
        <div className="container-body container">
          <div className="section-title">
            <h3>Coming Soon</h3>
            <Link to="/coming-soon/more">view more</Link>
          </div>
          <div className="horizontal-content">
            {coming.map((data) => {
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
                    {/* <p className="rating">
                      <span>⭐</span> {data.vote_average}/10
                    </p> */}
                    <p className="duration">
                      <span>{data.release_date}</span>{" "}
                      <span>{data.original_language}</span> PG-13
                    </p>
                    <div className="position-tablet">
                      <Link to={`/detail-movie/${data.id}`} className="button">
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
