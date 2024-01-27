import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Birds from "./components/Birds";
import Fish from "./components/Fish";
import Dogs from "./components/Dogs";

import Otherpets from "./components/Otherpets";
import Dogfoods from "./components/Dogfoods";
import Fishfoods from "./components/Fishfoods";
import Birdsfood from "./components/Birdsfood";
import DogAccessories from "./components/DogAccessories";
import FishAccessories from "./components/FishAccessories";
import BirdAccessories from "./components/BirdAccessories";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
 
        <Route path="/fish" element={<Fish />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/dogfoods" element={<Dogfoods />} />
        <Route path="/fishfoods" element={<Fishfoods />} />
        <Route path="/birsfoods" element={<Birdsfood />} />
        <Route path="/otherpets" element={<Otherpets />} />
        <Route path="/dogAccessories" element={< DogAccessories/>} />
        <Route path="/fishAccessories" element={<FishAccessories />} />
        <Route path="/birdAccessories" element={< BirdAccessories/>} />
     
      </Routes>
    </div>
  );
}

export default App;
