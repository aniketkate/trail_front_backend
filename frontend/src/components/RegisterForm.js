import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterForm() {
  const [formState, setFormState] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    age: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("posted");
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        formState,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const userName = formState.username || "User";
      console.log(userName);
      localStorage.setItem("userName", userName);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="f-cont">
      <div className="signup_form_container">
        <div className="left">
          <h1> Already have an account?</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Log in
            </button>
          </Link>
        </div>
        <div className="right">
          <form action="/" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              name="fullname"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              name="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formState.password}
              onChange={handleChange}
            />
            <select
              className="select"
              name="age"
              value={formState.age}
              onChange={handleChange}
              style={{
                padding: "0.5rem",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
                marginBottom: "25px",
              }}
            >
              <option value="">Select Age</option>
              {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="lbtn"
            >
              Sign up
            </button>
          </form>
        </div>
       
        {/* <div>
        Already have an account? <Link to="/login">Click here to login</Link>.
      </div>
          */}
      </div>
    </div>
  );
}

export default RegisterForm;
