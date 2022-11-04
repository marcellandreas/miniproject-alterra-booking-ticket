import { Link } from "react-router-dom";
import "../../hero/hero.css";
const DataSlider = ({ data }) => {
  return (
    <div>
      {data && (
        <div
          key={data.id}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_IMG_URL}/${data.backdrop_path})`,
            paddingTop: "10px",
            minHeight: "70vh",
            backgroundSize: "cover",
            // width: "100%",
          }}
        >
          <div className="d-flex  align-items-center  hero-text ">
            <div className="w-50 m-5">
              <h1 className="text-white fs-1 fw-bold">{data.title}</h1>
              <p className="text-white fs-5 fw-bolder">{data.overview}</p>
              <Link to={`/buy-ticket/${data.id}`} className="button">
                Buy Ticket
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataSlider;
