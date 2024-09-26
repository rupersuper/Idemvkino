import AdminHeader from "../components/AdminHeader";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogin") === "true";
  if (isLogged) {
    setTimeout(() => navigate("/admin"), 1);
  }
  return (
    <div className="bg-[url('./assets/login_desktop.png')] bg-cover bg-no-repeat w-full h-screen bg-fixed">
      <div className="max-w-5xl my-0 mx-auto">
        <AdminHeader />
        <AuthForm />
      </div>
    </div>
  );
};

export default Login;
