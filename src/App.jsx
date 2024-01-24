import React, { useState } from "react";
import "./App.css";
import NavMobile from "./components/NavMobile";
import NavbarDesktop from "./components/navbarDesktop";


function App() {
  return (
    <>
      <NavMobile />
      <NavbarDesktop/>
    </>
  );
}

export default App;
