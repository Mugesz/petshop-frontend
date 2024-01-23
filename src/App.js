import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Foods from "./components/Foods";
import Fish from "./components/Fish";
import Dogs from "./components/Dogs";
import Birds from "./components/Birds";
import Accessories from "./components/Accessories";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </div>
  );
}

export default App;
