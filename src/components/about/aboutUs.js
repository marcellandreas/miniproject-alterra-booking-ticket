import "./about.css";
import logoabout from "../../assets/1852.jpg";
import { Image } from "react-bootstrap";
import logo from "../../assets/MTIC-BR.png";
const AboutUsContainer = () => {
  return (
    <>
      <div className="container text-white about-container">
        <h1 className="pt-3 about-title">About US</h1>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <div className="about-image">
            <Image
              src={logoabout}
              style={{ width: "400px" }}
              className="image"
            />
          </div>
          <div className="about-text">
            <div className="d-flex justify-content-center align-content-center">
              <Image src={logo} style={{ width: "100px" }} />
            </div>
            Best App For Movie Lovers In Indonesia! Movie Entertainment Platform
            From Cinema To Online Movie Streaming Selections.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContainer;
