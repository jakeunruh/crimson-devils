import "./styles/base.scss";
import Home from "./pages/Home";
import EpkGeneral from "./pages/EpkGeneral";
import EpkFH from "./pages/EpkFH";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/epk" element={<EpkGeneral />} />
          <Route exact path="/epk-forever-high" element={<EpkFH />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
