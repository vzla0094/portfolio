import React, { Component } from "react";
import arrow from "../../img/scroll.png";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import { Link } from "react-scroll";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="sectionTwo" id="sectionTwo">
        <h2 className="sectionTwo__title">Algunos de mis proyectos:</h2>
        <div className="sectionTwo__boxes">
          <MDBContainer>
            <MDBRow>
              <MDBCol xl="12" className="mb-4">
                <MDBView
                  hover
                  zoom
                  className="sectionTwo__boxes__ecommerce z-depth-1-half mb-2"
                >
                  <MDBMask
                    overlay="black-strong"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      React, Redux, Styled Components, React Router, Firebase,
                      Sass
                    </p>
                    <a
                      href="https://e--commerce.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sectionTwo__boxes__visitarSitio"
                    >
                      <h4>Visitar sitio</h4>
                    </a>
                    <a
                      href="https://github.com/vzla0094/ecommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>Ver código</h5>
                    </a>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
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
                      href="https://talent-trade.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sectionTwo__boxes__visitarSitio"
                    >
                      <h4>Visitar sitio</h4>
                    </a>
                    <a
                      href="https://github.com/chingu-voyages/v8-geckos-team-05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>Ver código</h5>
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
                      href="https://vzla0094.github.io/rock_paper_scissors/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sectionTwo__boxes__visitarSitio"
                    >
                      <h4>Visitar sitio</h4>
                    </a>
                    <a
                      href="https://github.com/vzla0094/rock_paper_scissors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>Ver código</h5>
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
                      href="https://talent-trade.netlify.com/contacts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sectionTwo__boxes__visitarSitio"
                    >
                      <h4>Visitar sitio</h4>
                    </a>
                    <a
                      href="https://github.com/chingu-voyages/v8-geckos-team-05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>Ver código</h5>
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
                    overlay="white-slight"
                    className="flex-center flex-column"
                  >
                    <p className="sectionTwo__boxes__maskText">
                      Tecnologías usadas: <br />
                      CSS, Javascript
                    </p>
                    <a
                      href="https://vzla0094.github.io/Promedio-alumnos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sectionTwo__boxes__visitarSitio"
                    >
                      <h4>Visitar sitio</h4>
                    </a>
                    <a
                      href="https://github.com/vzla0094/Promedio-alumnos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>Ver código</h5>
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
                    overlay="white-slight"
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
                      className="sectionTwo__boxes__visitarSitio"
                    >
                      <h4>Visitar sitio</h4>
                    </a>
                    <a
                      href="https://github.com/vzla0094/calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>Ver código</h5>
                    </a>
                  </MDBMask>
                </MDBView>
                <p className="text-center">Calculadora (solo front-end)</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="sectionTwo__arrow flex-center">
          <Link
            className="navbar__links"
            to="sectionThree"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <MDBAnimation type="slideInDown" infinite duration="2s" delay="1s">
              <img src={arrow} width="30" height="30" alt="arrow" />
            </MDBAnimation>
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects;
