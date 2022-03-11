// Import Components
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
// Import Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

// Import Router
import { Routes, Route } from "react-router-dom";

// Protected Routes
import ProtectedRoute from "./routes/protectedRoute";

function App() {
  const { userData } = useSelector((state) => state.user);

  const token = userData && userData.token ? userData.token : null;

  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/login");
  }, [userData, token]);

  return (
    <Fragment>
      {token && (
        <div className="h-screen w-screen flex bg-gray-40">
          <Navbar />
          <main className="container mx-auto py-10">
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomeScreen />} />
                <Route
                  path="/products/:productId"
                  element={<ProductScreen />}
                />
                <Route
                  path="/products/category/:categoryId"
                  element={<ProductScreen />}
                />
              </Route>
            </Routes>
          </main>
        </div>
      )}
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Fragment>
  );
}

export default App;
