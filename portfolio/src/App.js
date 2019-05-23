import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";

function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
