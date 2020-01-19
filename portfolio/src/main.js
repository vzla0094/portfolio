import React, { Component } from "react";
import { NavbarPage } from "./components/navbar/Navbar";
import Presentation from "./components/sectionOne/Presentation";
import Projects from "./components/sectionTwo/Projects";
import AboutMe from "./components/sectionThree/AboutMe";
import Contact from "./components/sectionFour/Contact";
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
