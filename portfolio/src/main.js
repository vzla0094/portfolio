import React, { Component } from "react";
import { NavbarPage } from "./components/navbar/Navbar";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer">
        <NavbarPage />
        <Presentation />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    );
  }
}

export default Main;
