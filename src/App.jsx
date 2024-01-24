import React, { useState } from "react";
import "./App.css";
import EditAcyivity from "./Components/EditAcyivity";
import AddActivity from "./Components/AddActivity";
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
