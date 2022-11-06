
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { login, useAuth } from "../../firebase";
import swal from "sweetalert";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleLogin2 = (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password)
      .then(() => {
        swal({
          title: `Selamat Datang User `,
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        swal({
          title: `Email atau Password yang anda masukan salah`,
          icon: "error",
        });
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <>
      <div>
        {!currentUser && (
          <div className="form-page d-flex flex-column justify-content-center align-items-center">
            <Form>
              <div className="card-login">
                <h1 className="text-center">Login</h1>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <div className="input-field">
                    <Form.Control
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <div className="d-flex input-field">
                    <input
                      name="password"
                      value={password}
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={handleShow}>
                      {show ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>
                </Form.Group>

                <Button
                  className="mt-3 button-log"
                  disabled={loading}
                  onClick={handleLogin2}
                >
                  Log In
                </Button>
                <h6 className="mt-3">
                  Belum punya akun? <Link to="/register">Register</Link>
                </h6>
              </div>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};
export default LoginPage;



