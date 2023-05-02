import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [error, setError] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });



      // If authentication was successful, store the user object in local storage and redirect the user to the home page
      localStorage.setItem('user', JSON.stringify(response.data));
      window.location.href = '/';

    } catch (error) {
      console.error(error);
      setError('Invalid email or password. Please try again.');
    }
  };
 
  return (

     <div className='g1'>
         <div style={{ width: '100%', height: '100px', backgroundColor: 'transparent' }}></div>
      <h1>Login Form</h1>
      {error && <p>{error}</p>}
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
