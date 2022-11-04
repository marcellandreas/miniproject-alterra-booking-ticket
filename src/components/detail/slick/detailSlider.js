import "../detail.css";
import { Image } from "react-bootstrap";
const DetailSlider = ({ credit }) => {
  return (
    <div>
      {credit && (
        <div className="d-flex flex-wrap justify-content-center align-content-center">
          <div className="card-casts m-1" key={credit.id}>
            <Image
              style={{ width: "170px" }}
              src={`${process.env.REACT_APP_IMG_URL}/${credit.profile_path}`}
            />
            <p className="text-center">{credit.name}</p>
            <p className="text-center">As</p>
            <p className="text-center">{credit.character}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailSlider;
