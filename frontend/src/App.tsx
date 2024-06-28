import "./css/styles.css";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Global/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
