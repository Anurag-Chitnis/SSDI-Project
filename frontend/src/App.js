// Import Components
import { Fragment } from "react";
import Navbar from "./components/navbar";
// Import Screens
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Fragment>
      <div className="h-screen w-screen flex bg-gray-40">
        <Navbar />
        <main className="container mx-auto py-5">
          <HomeScreen></HomeScreen>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
