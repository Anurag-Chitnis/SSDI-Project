// Import Components
import { Fragment } from "react";
import Navbar from "./components/navbar";
// Import Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
// Import Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="h-screen w-screen flex bg-gray-40">
        <Navbar />
        <main className="container mx-auto py-5">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products/:productId" element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
