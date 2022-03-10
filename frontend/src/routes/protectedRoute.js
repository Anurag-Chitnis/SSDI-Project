// Default Imports
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userData } = useSelector((state) => state.user);
  const token = userData && userData.token ? userData.token : null;

  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
