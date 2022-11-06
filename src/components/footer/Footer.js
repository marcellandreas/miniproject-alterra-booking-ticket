import "./footer.css";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <footer>
      <div className="d-flex justify-content-around flex-wrap text-white pt-5">
        <div>
          <ul>
            <Link className="link">
              <li>About Us</li>
            </Link>
            <Link className="link">
              <li>Servies</li>
            </Link>
            <Link className="link">
              <li>Rules</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul>
            <Link className="link">
              <li>FAQ</li>
            </Link>
            <Link
              className="link"
              to="https://api.whatsapp.com/send?phone=6282141840186"
              rel="noreferrer"
            >
              <li>Contant</li>
            </Link>
          </ul>
        </div>
        <div className="footer-icons">
          <FaInstagram className="icons" />
          <FaGithub className="icons" />
          <FaFacebook className="icons" />
        </div>
      </div>
      <div className="d-flex justify-content-between p-5 text-footer flex-wrap">
        <p className="text-white text-center">
          Tugas Mini Project Kampus Merdeka B3{" "}
        </p>
        <p className="text-white text-center">
          Copyright © MarcellAndreasSamadhaniDuha
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
