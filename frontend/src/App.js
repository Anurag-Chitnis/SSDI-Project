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
import CategoryScreen from "./screens/CategoryScreen";
import CartScreen from "./screens/CartScreen";
import SubCategoryScreen from "./screens/SubCategoryScreen";
import ShippingScreen from "./screens/ShippingScreen";
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
        <div className="w-screen flex bg-gray-40">
          <Navbar />
          <main className="container mx-auto">
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomeScreen />} />
                <Route
                  path="/products/:productId"
                  element={<ProductScreen />}
                />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/cart/:id" element={<CartScreen />} />
                <Route
                  path="/checkoutsteps/shipping"
                  element={<ShippingScreen />}
                />
                <Route
                  path="/products/category/:categoryId"
                  element={<CategoryScreen />}
                />
                <Route
                  path="/products/category/:categoryId/:subCategoryId"
                  element={<SubCategoryScreen />}
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
