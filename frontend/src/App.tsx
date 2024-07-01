import "./css/styles.css";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";
import Screener from "./pages/Screener/Screener";
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
          <Route path="/screener" element={<Screener />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
