import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Classes from "./Pages/Classes";
import Info from "./Pages/Info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
