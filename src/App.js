import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Skill from "./Skill";
function App() {
  return (
    <Router>
      <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skill" element={<Skill />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
