import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import { Link } from "react-router-dom";
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
      <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </div>
  );
}

export default LoginPage;

