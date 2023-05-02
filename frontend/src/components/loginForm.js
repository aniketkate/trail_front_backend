import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      console.log(response.data); // handle response from backend
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <div className='g1'>
     <div style={{ width: '100%', height: '100px'}}></div>

      <h1 className='ltitle'>Login Form</h1>
      <form className='lform' onSubmit={handleSubmit}>
        <input
          className='linput'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className='linput'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='lbtn' type="submit">Log In</button>
      </form>
      <p className='rswitch '>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </div>
  );
}

export default LoginForm;
