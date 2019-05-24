import React, { Component } from "react";
class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <div className="sectionTwo" id="sectionTwo">
        <h2 className="sectionTwo__title">
          Eche un vistazo a algunos de mis proyectos:
        </h2>
        <div className="sectionTwo__boxes">
          <div className="sectionTwo__boxes__highlight">
            <div className="sectionTwo__boxes__highlight__one">
              <a href="https://talent-trade.netlify.com" target="_blank" />
            </div>
            <div className="sectionTwo__boxes__highlight__two">
              <a
                href="https://vzla0094.github.io/rock_paper_scissors/"
                target="_blank"
              />
            </div>
          </div>
          <div className="sectionTwo__boxes__normal">
            <div className="sectionTwo__boxes__normal__one">
              <a href="https://talent-trade.netlify.com" target="_blank" />
            </div>
            <div className="sectionTwo__boxes__normal__two">
              <a
                href="https://vzla0094.github.io/Promedio-alumnos/"
                target="_blank"
              />
            </div>
            <div className="sectionTwo__boxes__normal__three">
              <a
                href="https://vzla0094.github.io/calculator/"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;