import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { auth, logout } from "../../firebase";

import "./navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
// const currentUser = auth;
const NavbarPage = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
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
          title: `Berhasil Logout `,
          icon: "error",
        });
      });
  };
  return (
    <>
      <Navbar id="navbar-container" className="d-flex flex-column">
        <div className="logo text-white">
          {" "}
          M'<span>Film</span>{" "}
        </div>
        <div className="d-flex flex-row mb-3 text-white flex-wrap justify-content-center align-items-center">
          <Link to="/" className="navbar-menu active">
            <div className="p-2 ">Movies</div>
          </Link>
          <Link to="/now-playing/more" className="navbar-menu">
            <div className="p-2 ">Now Playing</div>
          </Link>
          <Link to="/coming-soon/more" className="navbar-menu">
            <div className="p-2 ">Coming Soon</div>
          </Link>
          <Link to="/my-ticket" className="navbar-menu">
            <div className="p-2 ">
              <BiCart className="me-1 cart " />
              My ticket
            </div>
          </Link>
          <Link to="/login" className="navbar-menu">
            <div className="p-2 ">
              {currentUser ? (
                <div style={{ display: "none" }}>Login</div>
              ) : (
                <div style={{ display: "block" }}>Login</div>
              )}
            </div>
          </Link>

          <Link className="navbar-menu">
            <div
              className="p-2 "
              // disabled={loading || !currentUser}
              onClick={handleLogout}
            >
              {!currentUser ? "" : "Logout"}
            </div>
          </Link>
          <div className="p-2 user">{currentUser?.email}</div>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarPage;
