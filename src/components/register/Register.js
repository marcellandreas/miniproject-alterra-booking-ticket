import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { signup, useAuth } from "../../firebase.js";
import { Button, Form } from "react-bootstrap";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import swal from "sweetalert";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signup(email, password)
      .then(() => {
        swal({
          title: `Selamat Datang User`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <div id="main">
      {!currentUser && (
        <div className="register-page d-flex flex-column justify-content-center align-items-center">
          <Form>
            <div className="card-register">
              <h1 className="text-center">Register / Sign Up</h1>
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
                onClick={handleSignup}
              >
                Register
              </Button>
              <h6 className="mt-3">
                Sudah punya akun? <Link to="/login">Login</Link>
              </h6>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}
