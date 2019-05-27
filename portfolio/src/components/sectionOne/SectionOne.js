import React, { Component } from "react";
import pic from "./pic.jpg";
import arrow from "../../img/scroll.png";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
class SectionOne extends Component {
  state = {};
  render() {
    return (
      <div className="sectionOne" id="sectionOne">
        <h1 className="sectionOne__title">Hola!</h1>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3" sm="12" className="flex-center">
              <img
                src={pic}
                height="150"
                width="150"
                className="sectionOne__presentation__img"
                alt="Eliezer Valenzuela"
              />
            </MDBCol>
            <MDBCol md="9" sm="12">
              <h2 className="sectionOne__presentation__text">
                Soy Eliezer, desarrollador web. He trabajado con HTML, CSS,
                Bootstrap, Javascript, React, y Sass.
                <br /> ¡Construyamos algo!
              </h2>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="sectionOne__arrow flex-center">
          <a href="#sectionTwo">
            <img src={arrow} width="50" height="50" alt="arrow" />
          </a>
        </div>
      </div>
    );
  }
}

export default SectionOne;
