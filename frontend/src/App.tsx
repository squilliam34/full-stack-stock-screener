import "./css/styles.css";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Global/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
