import React, { Component } from "react";
import { NavbarPage } from "./components/navbar/Navbar";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer">
        <NavbarPage />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    );
  }
}

export default Main;