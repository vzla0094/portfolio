import React, { Component } from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import talentTrade from "../../img/talent-trade.jpg";
import rockPaperScissors from "../../img/rock-paper-scissors.jpg";
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
            <MDBView
              hover
              zoom
              className="sectionTwo__boxes__highlight__talentTrade z-depth-1-half"
            >
              <MDBMask overlay="black-light" className="flex-center">
                <p className="sectionTwo__boxes__highlight__maskText">
                  Tecnologías usadas: <br />
                  React, Sass, React-Router
                </p>
              </MDBMask>
            </MDBView>
            <MDBView
              hover
              zoom
              className="sectionTwo__boxes__highlight__rockPaperScissors z-depth-1-half"
            >
              {/* <img
                src={rockPaperScissors}
                className="sectionTwo__boxes__highlight__cover__img"
                alt="rock-paper-scissors"
              /> */}
              <MDBMask overlay="black-light" className="flex-center">
                <p className="sectionTwo__boxes__highlight__maskText">
                  Tecnologías usadas: <br />
                  CSS, Javascript
                </p>
              </MDBMask>
            </MDBView>
          </div>
          <div className="sectionTwo__boxes__normal">
            <div className="sectionTwo__boxes__normal__one">
              <a
                href="https://talent-trade.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="sectionTwo__boxes__normal__two">
              <a
                href="https://vzla0094.github.io/Promedio-alumnos/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="sectionTwo__boxes__normal__three">
              <a
                href="https://vzla0094.github.io/calculator/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;
