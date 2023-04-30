import { useState } from 'react';
import axios from 'axios';

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
    <div>
     <div style={{ width: '100%', height: '100px', backgroundColor: 'transparent' }}></div>

      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
