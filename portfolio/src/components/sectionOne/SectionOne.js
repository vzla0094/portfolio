import React, { Component } from "react";
import pic from "./pic.jpg";
import arrow from "../../img/scroll.png";
class SectionOne extends Component {
  state = {};
  render() {
    return (
      <div className="sectionOne" id="sectionOne">
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
        <a className="sectionOne__arrow" href="#sectionTwo">
          <img src={arrow} width="50" height="50" />
        </a>
      </div>
    );
  }
}

export default SectionOne;
