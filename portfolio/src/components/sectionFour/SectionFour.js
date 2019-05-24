import React, { Component } from "react";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
class SectionFour extends Component {
  state = {};
  render() {
    return (
      <div className="sectionFour" id="sectionFour">
        <h2 className="sectionFour__title">Contacto:</h2>
        <div className="sectionFour__icons">
          <a
            href="https://www.linkedin.com/in/eliezervalenzuela/"
            target="_blank"
          >
            <img src={linkedin} width="70" height="70" />
          </a>
          <a href="https://github.com/vzla0094" target="_blank">
            <img src={github} width="70" height="70" />
          </a>
        </div>
        <p className="sectionFour__text">6311054619</p>
      </div>
    );
  }
}

export default SectionFour;
