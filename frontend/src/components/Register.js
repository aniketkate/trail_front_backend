import axios from 'axios';
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    age: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("posted")
    event.preventDefault();
    try {

        const response = await axios.post('http://localhost:5000/register', formState, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          });
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
      <div style={{ width: '100%', height: '100px' }}></div>

      <h1>Register Form!</h1>
      <form action='/'  onSubmit={handleSubmit}>
        <input
          name="name"
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
          name="age"
          value={formState.age}
          onChange={handleChange}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            marginBottom: '25px',
          }}
        >
          <option value="">Select Age</option>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>

        <button type="submit" action="/contact" style={{ fontSize: '20px' }}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
