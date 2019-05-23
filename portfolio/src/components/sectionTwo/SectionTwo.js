import React, { Component } from "react";
class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <div className="sectionTwo">
        <h2 className="sectionTwo__title">
          Echa un vistazo a algunos de mis proyectos
        </h2>
        <div className="sectionTwo__boxes">
          <div className="sectionTwo__boxes__one" />
          <div className="sectionTwo__boxes__two" />
          <div className="sectionTwo__boxes__three" />
        </div>
      </div>
    );
  }
}

export default SectionTwo;
