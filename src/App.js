import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={ <Home /> }/>
  <Route path="/Events" element={ <Events /> }/>
  <Route path="/Gallery" element={ <Gallery /> }/>
  <Route path="/Contact" element={ <Contact /> }/>
  <Route path="/Pricing" element={ <Pricing /> }/>
  <Route path="/About" element={ <About /> }/>
</Routes>
</>
  );
}

export default App;
