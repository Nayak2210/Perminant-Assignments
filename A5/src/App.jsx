
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Links/Home.jsx";
import About from "./Links/About.jsx";
import Contact from "./Links/Contact.jsx";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#222", color: "white" }}>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px", color: "white" }}>About</Link>
        <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
