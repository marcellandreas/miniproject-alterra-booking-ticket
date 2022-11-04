import "./viewMore.css";
import NavbarPage from "../../navbar";
import FooterPage from "../../footer/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

const DetailComingSoon = () => {
  const coming = useSelector((state) => state.comingsoon.coming);
  console.log("detail coming soon => ", coming);
  return (
    <>
      <NavbarPage />
      <div className="body-content " id="detailnow-playing">
        <div className="container-body">
          <div className="text-center text-white pt-4">
            <Card.Title>Coming Soon</Card.Title>
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
                    <p className="rating">
                      <span>⭐</span> {data.vote_average}/10
                    </p>
                    <p className="duration">
                      <span>{data.release_date}</span>{" "}
                      <span>{data.original_language}</span>
                    </p>
                    <p>Relesed date</p>
                    <div className="position-tablet">
                      <Link to={`/detail-movie/${data.id}`} className="button">
                        Get Detail
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

export default DetailComingSoon;
