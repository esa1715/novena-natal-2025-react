import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Encontro from "./pages/Encontro";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encontro/:dia" element={<Encontro />} />
      </Routes>
    </Router>
  );
}
