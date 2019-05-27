import React, { Component } from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <div className="sectionTwo" id="sectionTwo">
        <h2 className="sectionTwo__title">
          Eche un vistazo a algunos de mis proyectos:
        </h2>
        <div className="sectionTwo__boxes">
          <MDBContainer>
            <MDBRow>
              <MDBCol xl="6" className="mb-4">
                <MDBView
                  hover
                  zoom
                  className="sectionTwo__boxes__talentTrade z-depth-1-half mb-2"
                >
                  <MDBMask
                    overlay="black-strong"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      React, Sass, React-Router
                    </p>
                    <a
                      href="https://github.com/chingu-voyages/v8-geckos-team-05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>Ver código</h2>
                    </a>
                  </MDBMask>
                </MDBView>
                <p className="text-center">
                  Bosquejo de aplicación front-end que permite a usuarios
                  conectarse, para aprender o enseñar habilidades
                </p>
              </MDBCol>
              <MDBCol xl="6" className="mb-4">
                <MDBView
                  hover
                  zoom
                  className="sectionTwo__boxes__rockPaperScissors z-depth-1-half mb-2"
                >
                  <MDBMask
                    overlay="black-strong"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      CSS, Javascript
                    </p>
                    <a
                      href="https://github.com/vzla0094/rock_paper_scissors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>Ver código</h2>
                    </a>
                  </MDBMask>
                </MDBView>
                <p className="text-center">Juego de Piedra, Papel o Tijeras!</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol sm="4" className="mb-4">
                <MDBView
                  hover
                  zoom
                  className="sectionTwo__boxes__talentTradeMobile z-depth-1-half mb-2"
                >
                  <MDBMask
                    overlay="black-strong"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      CSS, Javascript
                    </p>
                    <a
                      href="https://github.com/chingu-voyages/v8-geckos-team-05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>Ver código</h2>
                    </a>
                  </MDBMask>
                </MDBView>
                <p className="text-center">
                  Bosquejo de aplicación front-end que permite a usuarios
                  conectarse, para aprender o enseñar habilidades (vista móvil)
                </p>
              </MDBCol>
              <MDBCol sm="4" className="mb-4">
                <MDBView
                  hover
                  zoom
                  className="sectionTwo__boxes__promedio z-depth-1-half mb-2"
                >
                  <MDBMask
                    overlay="black-light"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      CSS, Javascript
                    </p>
                    <a
                      href="https://github.com/vzla0094/Promedio-alumnos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>Ver código</h2>
                    </a>
                  </MDBMask>
                </MDBView>
                <p className="text-center">
                  Simple aplicación que registra calificaciones de alumnos y
                  permite consultar el promedio (solo front-end)
                </p>
              </MDBCol>
              <MDBCol sm="4" className="mb-4">
                <MDBView
                  hover
                  zoom
                  className="sectionTwo__boxes__calculator z-depth-1-half mb-2"
                >
                  <MDBMask
                    overlay="black-light"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      CSS, Javascript
                    </p>
                    <a
                      href="https://github.com/vzla0094/calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>Ver código</h2>
                    </a>
                  </MDBMask>
                </MDBView>
                <p className="text-center">Calculadora (solo front-end)</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default SectionTwo;
