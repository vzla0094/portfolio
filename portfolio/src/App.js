import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SectionOne from "./components/sectionOne/SectionOne";

function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <SectionOne />
    </div>
  );
}

export default App;
