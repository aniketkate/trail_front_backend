import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      console.log(response.data); // handle response from backend
      const userName = response.data.username || 'user';
      console.log(userName);
      localStorage.setItem('userName', userName);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
 
  return (

    <div>
     <div className='g1'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>

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
