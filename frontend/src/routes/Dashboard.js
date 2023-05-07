import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardForm from "../components/dashboardForm";

function Dashboard() {
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     navigate("/dashboard");
//   };

  return (
    <div>
        <Navbar/>
      {/* <h1>Login Page</h1> */}
      <DashboardForm />
    </div>
  );
}

export default Dashboard;

