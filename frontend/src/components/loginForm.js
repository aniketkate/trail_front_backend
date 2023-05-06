import { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // If authentication was successful, store the user object in local storage and redirect the user to the home page
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="g1">
      <div className="login_form_container">
        <div className="left">
          
          <form onSubmit={handleSubmit} className="form_container">
            <h1>Login to Your Account</h1>
            {error && <p className="error_msg">{error}</p>}
            <input
              className="linput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="linput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="lbtn" type="submit">
              Log In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/register">
            <button type="button" className="white_btn">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;