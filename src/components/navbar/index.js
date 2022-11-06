import { Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { logout, useAuth } from "../../firebase";
import logo from "../../assets/MTIC-BR.png";

import "./navbar.css";

import swal from "sweetalert";
// const currentUser = auth;
const NavbarPage = () => {
  const currentUser = useAuth();
  const handleLogout = async () => {
    await logout()
      .then(() => {
        swal({
          title: `Berhasil Logout `,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: `Gagal Melakukan Logout `,
          icon: "error",
        });
      });
  };

  return (
    <>
      <Navbar id="navbar-container" className="d-flex flex-column">
        <div className="logo text-white">
          {/* M'<span>Film</span>{" "} */}
          <Image src={logo} style={{ width: "50px" }} />
        </div>
        <div className="d-flex flex-row mb-3 text-white flex-wrap justify-content-center align-items-center">
          <Link to="/" className="navbar-menu active m-1">
            <div className="p-2 ">Movies</div>
          </Link>
          <Link to="/now-playing/more" className="navbar-menu m-1">
            <div className="p-2 ">Now Playing</div>
          </Link>
          <Link to="/coming-soon/more" className="navbar-menu m-1">
            <div className="p-2 ">Coming Soon</div>
          </Link>
          <Link to="/my-ticket" className="navbar-menu m-1">
            <div className="p-2 ">
              <BiCart className="me-1 cart " />
              My ticket
            </div>
          </Link>

          <Link className="navbar-menu m-1">
            <div
              className="p-2 "
              // disabled={loading || !currentUser}
              onClick={handleLogout}
            >
              {!currentUser ? (
                <div>
                  <Link className="navbar-menu" to="/login">
                    login
                  </Link>
                </div>
              ) : (
                "Logout"
              )}
            </div>
          </Link>
          <div className="p-1 ">
            {currentUser?.displayName ? (
              <div className="user" style={{ display: "block" }}>
                {currentUser?.displayName}
              </div>
            ) : (
              <div className="user" style={{ display: "none" }}>
                {currentUser?.displayName}
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarPage;
