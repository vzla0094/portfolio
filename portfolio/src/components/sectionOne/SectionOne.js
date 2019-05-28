import React, { Component } from "react";
import pic from "./pic.jpg";
import arrow from "../../img/scroll.png";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBAnimation } from "mdbreact";

class SectionOne extends Component {
  state = {};
  render() {
    return (
      <div className="sectionOne" id="sectionOne">
        <h1 className="sectionOne__title">Hola!</h1>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="3" md="12" className="flex-center">
              <img
                src={pic}
                className="sectionOne__presentation__img"
                alt="Eliezer Valenzuela"
              />
            </MDBCol>
            <MDBCol lg="9" md="12">
              <h2 className="sectionOne__presentation__text">
                Soy Eliezer, desarrollador web. He trabajado con HTML, CSS,
                Bootstrap, Javascript, React, y Sass.
                <br />
                <br /> ¡Construyamos algo!
              </h2>
              <hr className="navBorder" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="sectionOne__arrow flex-center">
          <a href="#sectionTwo">
            <MDBAnimation type="slideInDown" infinite duration="2s" delay="1s">
              <img src={arrow} width="30" height="30" alt="arrow" />
            </MDBAnimation>
          </a>
        </div>
      </div>
    );
  }
}

export default SectionOne;
