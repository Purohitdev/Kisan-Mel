// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comp/Home";
import Franchise from "./Comp/Franch/Franchise"; 
import MiniModel from "./Comp/Mini/MiniModel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Franchise" element={<Franchise />} />
        <Route path="/MiniModel" element={<MiniModel />} />

      </Routes>
    </Router>
  );
}

export default App;
