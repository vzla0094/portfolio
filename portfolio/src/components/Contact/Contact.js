import React, { Component } from "react";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="sectionFour" id="sectionFour">
        <h2 className="sectionFour__title">Contacto:</h2>
        <div className="sectionFour__icons">
          <a
            href="https://www.linkedin.com/in/eliezervalenzuela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} width="70" height="70" alt="linkedin-logo" />
          </a>
          <a
            href="https://github.com/vzla0094"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} width="70" height="70" alt="github-logo" />
          </a>
        </div>
        <p className="sectionFour__text">+52 6311054619</p>
      </div>
    );
  }
}

export default Contact;
