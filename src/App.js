import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Classes from "./Pages/Classes";
import UpcomingEvents from "./Pages/UpcomingEvents";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={ <Home /> }/>
  <Route path="/Events" element={ <Events /> }/>
  <Route path="/Gallery" element={ <Gallery /> }/>
  <Route path="/Contact" element={ <Contact /> }/>
  <Route path="/About" element={ <About /> }/>
  <Route path="/Classes" element={ <Classes /> }/>
  <Route path="/UpcomingEvents" element={ <UpcomingEvents /> }/>
</Routes>
</>
  );
}

export default App;
