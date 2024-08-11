import "./css/styles.css";
import Homepage from "./pages/Homepage/Homepage";
import Screener from "./pages/Screener/Screener";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Global/Navbar";
import StockDetails from "./pages/StockDetails/StockDetails";
import sampleData from "./types/sampleData";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/screener" element={<Screener />} />
          <Route
            path="/stocks/:symbol"
            element={<StockDetails data={sampleData} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
