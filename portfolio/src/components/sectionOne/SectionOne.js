import React, { Component } from "react";
import pic from "./pic.jpg";

class SectionOne extends Component {
  state = {};
  render() {
    return (
      <div className="sectionOne">
        <h1 className="sectionOne__title">Hola!</h1>
        <div className="sectionOne__presentation">
          <img
            src={pic}
            height="150"
            width="150"
            className="sectionOne__presentation__img"
          />
          <h2 className="sectionOne__presentation__text">
            Soy Eliezer, desarrollador web. He trabajado con HTML, CSS,
            Javascript, React, y Sass.
            <br /> ¡Construyamos algo!
          </h2>
        </div>
      </div>
    );
  }
}

export default SectionOne;
