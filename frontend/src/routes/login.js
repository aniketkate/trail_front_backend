import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";

import Navbar from "../components/Navbar";

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div>
        <Navbar/>
      <h1>Login Page</h1>
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
}

export default LoginPage;

