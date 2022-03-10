// Default Imports
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const token = userData && userData.token ? userData.token : null;
  return token ? <Outlet /> : navigate("/login");
};

export default ProtectedRoute;
