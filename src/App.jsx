import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Aminities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";




function App() {
  return (
    <Router>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Aminities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
   
      <Footer />
    </Router>
  );
}

export default App;
